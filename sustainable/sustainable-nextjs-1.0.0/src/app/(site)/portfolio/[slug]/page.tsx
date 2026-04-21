import { boxData } from "@/app/api/data";
import PortfolioContent from "./PortfolioContent";

export async function generateStaticParams() {
  return boxData.map((item) => ({
    slug: item.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <PortfolioContent slug={slug} />;
}
