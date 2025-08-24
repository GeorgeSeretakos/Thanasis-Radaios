import DetailPage from "../../../components/blog/DetailPage";

export default function EquipmentDetail({ params }) {
  return <DetailPage category="products" slug={params.slug} />;
}
