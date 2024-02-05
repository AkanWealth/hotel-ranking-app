
export interface PrimaryButtonIprops {
  type?: "button" | "submit" | "reset";
  color?: string;
  bgColor?: string;
  paddingX?: string;
  borderColor?: string;
  text?: string;
  fontSize?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: unknown;
  frontIcon?: unknown;
}

const PrimaryButton = ({
  type,
  color,
  bgColor,
  paddingX,
  text,
  fontSize,
  borderColor,
  loading,
  onClick,
}: PrimaryButtonIprops) => {
  return (
    <button
      type={type || "button"}
      className={`w-full h-[48px] ${
        paddingX ? paddingX : "px-6"
      }  py-3 ${bgColor} ${color} ${
        fontSize && fontSize
      }  border-[1px] ${borderColor} rounded-[12px] justify-center items-center inline-flex text-center text-base font-semibold`}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? (
        <h1>Processing...</h1>
      ) : (
        <div className="flex items-center gap-1">
          {text && text}
        </div>
      )}
    </button>
  );
};

export default PrimaryButton;
