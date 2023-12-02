import CategoriesGrid from "@/app/components/CategoriesGrid";
import FeaturedProducts from "@/app/components/FeaturedProducts";
import ImageCarousel from "@/app/components/ImageCarousel";

export default function Home() {
	return (
		<main>
			<ImageCarousel />
			<FeaturedProducts />
			<CategoriesGrid />
		</main>
	);
}
