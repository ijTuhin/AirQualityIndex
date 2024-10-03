/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/html/utils/withMT";
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  plugins: [
    // require('@tailwindcss/forms'),
    require("preline/plugin"),
  ],
  theme: {
    extend: {},
  },
});
