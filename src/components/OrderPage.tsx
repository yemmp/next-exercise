import PageMark from "./PageMark";
import Searchbar from "./Searchbar";
import YourOrders from "./YourOrders";
import ThisWeek from "./ThisWeek";
import ThisMonth from "./ThisMonth";
import Order from "./Order";
import OrdersTab from "./OrdersTab";

const pages = ["Home", "Orders"];

export default function OrderPage() {
  return (
    <article className="">
      <div className="flex  justify-between w-full h-1/4 pt-3  ">
        <PageMark pages={pages} />
        <Searchbar />
      </div>
      <div className="flex gap-2">
        <div className=" w-2/3">
          <div>
            <YourOrders />
          </div>
          <div className="flex mt-2 gap-2">
            <div className="w-1/2">
              <ThisWeek />
            </div>
            <div className="w-1/2">
              <ThisMonth />
            </div>
          </div>
          <div className="mt-2">
            <div>
              <OrdersTab />
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <div>
            <Order />
          </div>
        </div>
      </div>
    </article>
  );
}
