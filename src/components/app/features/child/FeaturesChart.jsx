import "./featuresChart.scss";
import PieChart from "@assets/app/features/pieChart.webp";

export default function FeaturesChart() {
    return (
        <div className="featuresChart frameScroll">
            <img loading="lazy" src={PieChart.src} alt="Token Pie Chart" />
        </div>
    );
}