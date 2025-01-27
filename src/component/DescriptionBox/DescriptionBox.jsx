import "./descriptionbox.css"

 function DescriptionBox() {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviewa (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce  is one that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service</p>
        <p>As an order is placed, the customer's web browser communicates back and forth with the server hosting the e-commerce website. Data pertaining to the order is relayed to a central computer known as the order manager. The data is then forwarded to databases that manage inventory levels; a merchant system that manages payment information using payment processing applications, such as PayPal; and a bank computer. Finally, it circles back to the order manager. This ensures store inventory and customer funds are sufficient for the order to be processed.</p>     
      </div>
    </div>
  );
}
export default DescriptionBox
