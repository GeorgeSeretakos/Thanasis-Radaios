// components/EquipmentGrid.jsx
"use client";
import { useState } from "react";

export default function EquipmentGrid({ title, items = [], rowMaxH = 420 }) {
  return (
    <section className="w-4/5 max-w-7xl mx-auto py-12">
      {title && (
        <div className="bg-[#1C86D1] p-4 rounded-xl text-2xl font-bold text-white text-center !mb-8">
          {title}
        </div>
      )}

      <div className="flex flex-col divide-y divide-[#1C86D1]">
        {items.map((item, idx) => (
          <ItemRow key={item.name ?? idx} item={item} rowMaxH={rowMaxH} />
        ))}
      </div>
    </section>
  );
}

function ItemRow({ item, rowMaxH }) {
  const { name, description, images = [] } = item ?? {};
  const [selected, setSelected] = useState(0);
  if (!images.length) return null;

  const thumbH = 80;

  return (
    <div className="py-8 md:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center">
        {/* Left: big photo only */}
        <div className="w-full">
          <img
            src={images[selected]}
            alt={`${name} ${selected + 1}/${images.length}`}
            className="w-full rounded-xl object-contain"
            style={{ maxHeight: rowMaxH }}
          />
        </div>

        {/* Right: text + thumbs */}
        <div className="w-full flex flex-col">
          <h2 className="text-xl md:text-2xl font-bold text-[#1C86D1] mb-2">
            {name}
          </h2>

          <p className="font-semibold leading-relaxed mb-4">{description}</p>

          {images.length > 1 && (
            <div className="flex flex-wrap gap-3 mt-2">
              {images.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelected(i)}
                  className="rounded-lg transition cursor-pointer"
                  aria-label={`Εμφάνιση εικόνας ${i + 1}`}
                >
                  <div
                    className="w-24 md:w-28 rounded-lg grid place-items-center overflow-hidden"
                    style={{height: thumbH}}
                  >
                    <img
                      src={src}
                      alt={`${name} thumbnail ${i + 1}`}
                      className="object-contain max-h-full max-w-full"
                      style={{maxHeight: thumbH}}
                    />
                  </div>

                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
