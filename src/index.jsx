import ReactDom from "react-dom"
import App from "./App.jsx"
import "../src/css/index.css"
import ShopContextProvider from "./context/ShopContext.jsx"
ReactDom.render(<ShopContextProvider>
<App/>
</ShopContextProvider>
,document.getElementById("root"))