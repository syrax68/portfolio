import "./Experience.style.scss";
import { useState } from "react";
import { initialTabs as tabs } from "./skills";
import { motion, AnimatePresence } from "framer-motion";

export default function Card() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="window">
      <nav>
        <ul>
          {tabs.map((item) => (
            <li
              key={item.label}
              className={item === selectedTab ? "selected" : ""}
              onClick={() => setSelectedTab(item)}
            >
                <div className="menu-skill">
                    <img src={item.icon} alt={item.label} /> {item.label}
                </div>
                {item === selectedTab ? (
                    <motion.div className="underline" layoutId="underline" />
                ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab &&
                <div className="section-info">
                    <h2>{selectedTab.post}</h2>
                    <span>{selectedTab.delay}</span>
                    <p className="description">
                        {selectedTab.description}
                    </p>
                    <img src={selectedTab.icon} alt={selectedTab.label} width={100} height={100}/>

                </div>
            }
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
