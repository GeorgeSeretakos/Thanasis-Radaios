import DetailPage from "../../../components/blog/DetailPage";

export default function StudyDetail({ params }) {
  return <DetailPage category="studies" slug={params.slug} />;
}
