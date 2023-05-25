export const StepperPill = ({ backgroundColor }) => {
    const pillColor = backgroundColor ? "#A4E8F2" : "#F1F2F3";

    return (
        <div
            style={{
                backgroundColor: pillColor,
                width: "40px",
                height: "8px",
                borderRadius: "20px",
            }}
        ></div>
    );
};
