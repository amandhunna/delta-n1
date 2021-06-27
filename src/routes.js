import Navbar from "./components/Navbar/Index";
import Header from "./components/Header";

import {Route } from "react-router-dom";

import { Responsive } from "./helper/Responsive/Responsive";

/* pages */

/* Men */
import NewArrivalsTop from "./pages/Products/Men/Tops/NewArrivals/NewArrivalsTop";
import NewArrivalsMenTopMobile from "./pages/Products/Men/Tops/NewArrivals/NewArrivalsTopMobile";
import NewArrivalsBottoms from "./pages/Products/Men/Bottoms/NewArrivals/NewArrivalsBottoms";
import CollectionMobileTop from "./pages/Products/Men/Tops/Collections/CollectionMobileTop";
import CollectionsTop from "./pages/Products/Men/Tops/Collections/CollectionsTop";
import CollectionBottoms from "./pages/Products/Men/Bottoms/Collections/CollectionBottoms";
import BestSellerTop from "./pages/Products/Men/Tops/Bestsellers/BestSellerTop";
import BestSellerMobileTop from "./pages/Products/Men/Tops/Bestsellers/BestSellerMobileTop";
import BestSellerBottoms from "./pages/Products/Men/Bottoms/Bestsellers/BestSellersBottoms";

/* Women */
import NewArrivalsWomanTop from "./pages/Products/Women/Tops/NewArrivals/NewArrivalsWomanTop";
import NewArrivalsWomanBottoms from "./pages/Products/Women/Bottoms/NewArrivals/NewArrivalsWomanBottoms";
import NewArrivalsMobileWomanTop from "./pages/Products/Women/Tops/NewArrivals/NewArrivalsMobileWomanTop";
import BestSellerMobileWomanTop from "./pages/Products/Women/Tops/Bestsellers/BestSellerMobileWomanTop";
import CollectionMobileWomantop from "./pages/Products/Women/Tops/Collections/CollectionMobileWomanTop";
import CollectionWomanTop from "./pages/Products/Women/Tops/Collections/CollectionWomanTop";
import CollectionWomanBottoms from "./pages/Products/Women/Bottoms/Collections/CollectionWomanBottoms";
import BestSellerWomantop from "./pages/Products/Women/Tops/Bestsellers/BestSellerWomanTop";
import BestSellerWomanBottoms from "./pages/Products/Women/Bottoms/Bestsellers/BestSellerWomanBottoms";

/* NewArrivals - Men */

export const NewArrivalsMenTop = (
  <Route path='/new/men/tops'>
    <Header /> <Navbar />
    <NewArrivalsTop />
  </Route>
);

export const NewArrivalsMenBottoms = (
  <Route path='/new/men/bottoms'>
    <Header /> <Navbar />
    <NewArrivalsBottoms />
  </Route>
);

export const NewArrivalsMenMobile = (
  <Route path='/newarrivals/men'>
    <Responsive displayIn={["Mobile", "Tablet"]}>
      <Header />
      <NewArrivalsMenTopMobile />
    </Responsive>
  </Route>
);

// New Arrivals - Women

export const NewArrivalsWomenBottom = (
  <Route path='/new/women/bottoms'>
    <Responsive displayIn={["Laptop"]}>
      <Header />
      <Navbar />
      <NewArrivalsWomanBottoms />
    </Responsive>
  </Route>
);

export const NewArrivalsWomenTop = (
  <Route path='/new/women/tops'>
    <Responsive displayIn={["Laptop"]}>
      <Header />
      <Navbar />
      <NewArrivalsWomanTop />
    </Responsive>
  </Route>
);

export const NewArrivalsWomenMobile = (
  <Route path='/newarrivals/women'>
    <Responsive displayIn={["Mobile", "Tablet"]}>
      <Header />
      <NewArrivalsMobileWomanTop />
    </Responsive>
  </Route>
);

// Collection - Men

export const CollectionMenTop = (
  <Route path='/collections/men/tops'>
    <Responsive displayIn={["Laptop"]}>
      <Header /> <Navbar />
      <CollectionsTop />
    </Responsive>
  </Route>
);

export const CollectionMenBottom = (
  <Route path='/collections/men/bottoms'>
    <Responsive displayIn={["Laptop"]}>
      <Header />
      <Navbar />
      <CollectionBottoms />
    </Responsive>
  </Route>
);

export const CollectionsMenMobile = (
  <Route path='/collections/men'>
    <Responsive displayIn={["Mobile", "Tablet"]}>
      <Header />
      <CollectionMobileTop />
    </Responsive>
  </Route>
);

// Collection - Woman

export const CollectionsWomanTops = (
  <Route path='/collections/women/tops'>
    <Responsive displayIn={["Laptop"]}>
      <Header /> <Navbar />
      <CollectionWomanTop />
    </Responsive>
  </Route>
);

export const CollectionsWomanBottoms = (
  <Route path='/collections/women/bottoms'>
    <Responsive displayIn={["Laptop"]}>
      <Header /> <Navbar />
      <CollectionWomanBottoms />
    </Responsive>
  </Route>
);

export const CollectionWomanMobile = (
  <Route path='/collections/women'>
    <Responsive displayIn={["Mobile", "Tablet"]}>
      <Header />
      <CollectionMobileWomantop />
    </Responsive>
  </Route>
);

/* BestSellers - Men */

export const BestSellersMenTops = (
  <Route path='/bestsellers/men/tops'>
    <Responsive displayIn={["Laptop"]}>
      <Header /> <Navbar />
      <BestSellerTop />
    </Responsive>
  </Route>
);

export const BestSellersMenBottoms = (
  <Route path='/bestsellers/men/bottoms'>
    <Responsive displayIn={["Laptop"]}>
      <Header /> <Navbar />
      <BestSellerBottoms />
    </Responsive>
  </Route>
);

export const BestSellersMenMobile = (
  <Route path='/bestsellers/men'>
    <Responsive displayIn={["Mobile", "Tablet"]}>
      <Header />
      <BestSellerMobileTop />
    </Responsive>
  </Route>
);

// bestsellers - women
export const BestSellersWomenTops = (
  <Route path='/bestsellers/women/tops'>
    <Responsive displayIn={["Laptop"]}>
      <Header /> <Navbar />
      <BestSellerWomantop />
    </Responsive>
  </Route>
);

export const BestSellersWomanBottoms = (
  <Route path='/bestsellers/women/bottoms'>
    <Responsive displayIn={["Laptop"]}>
      <Header /> <Navbar />
      <BestSellerWomanBottoms />
    </Responsive>
  </Route>
);

export const BestSellersWomanMobile = (
  <Route path='/bestsellers/women'>
    <Responsive displayIn={["Mobile", "Tablet"]}>
      <Header />
      <BestSellerMobileWomanTop />
    </Responsive>
  </Route>
);

export const Home = (
  <Route path='/'>
    <Responsive displayIn={["Laptop"]}>
      <>
        {" "}
        <Header /> <Navbar />{" "}
      </>
    </Responsive>

    <Responsive displayIn={["Mobile"]}>
      <>
        <Header />
      </>
    </Responsive>

    <Responsive displayIn={["Tablet"]}>
      <>
        <Header />
      </>
    </Responsive>
  </Route>
);
