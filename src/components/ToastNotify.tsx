import toast from "react-hot-toast";

const ToastNotify = (text: string) => {
  return toast(text, {
    duration: 6000,
    position: "top-center",

    // Styling
    style: {border: "1px solid #10db8d"},
    className: "",

    // Custom Icon
    icon: "",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });
};

export default ToastNotify;
