/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/html/utils/withMT";
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  purge: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx"],
  plugins: [
    // require('@tailwindcss/forms'),
    require("preline/plugin"),
  ],
  theme: {
    extend: {},
  },
});
