import { sanityFetch } from "../live";
import { CouponCode } from "./CouponCode";
import { defineQuery } from "next-sanity";

export const getActiveSaleByCouponCode = async (couponCode: CouponCode) => {
  const ACTIVE_SALE_BY_COUPON_CODE_QUERY = defineQuery(`
        *[
            _type == "sales" 
            && isActive == true
            && couponCode == $couponCode
        ] | order(validFrom desc)[0]
    `);

  try {
    const activeSale = await sanityFetch({
      query: ACTIVE_SALE_BY_COUPON_CODE_QUERY,
      params: {
        couponCode,
      }, // Pass the coupon code as a query parameter
    });

    return activeSale ? activeSale.data : null;
  } catch (error) {
    console.error("Error fetching active sale by coupon code:", error);
    return null;
  }
};
