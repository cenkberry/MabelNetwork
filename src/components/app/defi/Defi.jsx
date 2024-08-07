import DefiImage from "./child/DefiImage";
import DefiContent from "./child/DefiContent";

export default function Defi() {
    return (
        <section id="defi" className="pt-20 mb-60">
          <div className="container">
            <div className="row aic">
              <div className="box-lap-6 frameScroll">
                <DefiImage />
              </div>
              <div className="box-lap-6 frameScroll">
                <DefiContent />
              </div>
            </div>
          </div>
        </section>
    );
}