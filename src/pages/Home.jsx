import { useSnapshot } from "valtio";
import { motion, AnimatePresence } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import state from "../store";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("right")}>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                تیـــشرتت <br className="xl:block hidden" /> رو خودت بساز.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-lg mt-4 font-normal text-gray-600 text-base text-justify">
                شما می‌تونید طرح‌های خلاقانه‌ی خودتون رو روی تیشرت بذارید،
                سه‌بعدی ببینیدش و بعد از انتخاب رنگ و سایز، تیشرتی که طبق سلیقه
                و شخصیت شماست و فقط مخصوص خودتونه رو سفارش بدید.
              </p>
              <button
                className="w-fit px-10 py-2.5 font-bold text-lg rounded-md"
                style={{ background: state.color }}
                onClick={() => (state.intro = false)}
              >
                ساختن تیشرت
              </button>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
