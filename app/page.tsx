import CategoriesGrid from "@/components/CategoriesGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import ImageCarousel from "@/components/ImageCarousel";

export default function Home() {
	return (
		<main className=" flex flex-col gap-32">
			<ImageCarousel />
			<FeaturedProducts />
			<CategoriesGrid />
		</main>
	);
}
