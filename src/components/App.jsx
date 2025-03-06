import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import { useState, useEffect } from "react";
import Notifications from "./Notifications";

export default function App() {

    const [clicks, setClicks] = useState(() => {
        try {
            const saveClicks = localStorage.getItem("selectedClicks");
            return saveClicks ? JSON.parse(saveClicks) : { good: 0, neutral: 0, bad: 0 };
        } catch (error) {
            console.error("Ошибка парсинга localStorage:", error);
            return { good: 0, neutral: 0, bad: 0 };
        }
    });

    const handleClick = (key) => {
        if (key === "reset") {
            setClicks({ good: 0, neutral: 0, bad: 0 });
        } else {
            setClicks(prevClicks => ({
                ...prevClicks,
                [key]: prevClicks[key] + 1
            }));
        }
    };

    useEffect(() => {
        if (clicks) {
            try {
                localStorage.setItem("selectedClicks", JSON.stringify(clicks));
            } catch (error) {
                console.error("Ошибка записи в localStorage:", error);
            }
        }
    }, [clicks]);

    const totalFeedback = (clicks?.good || 0) + (clicks?.neutral || 0) + (clicks?.bad || 0);

    return (
        <div>
            <Description />
            <Options handleClick={handleClick} totalFeedback={totalFeedback} />
            {totalFeedback > 0 ? <Feedback clicks={clicks} totalFeedback={totalFeedback} /> : <Notifications />}
        </div>
    );
}
