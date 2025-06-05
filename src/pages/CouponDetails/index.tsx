import PageTitle from "@/components/CommonComponents/PageTitle";
import Coupon from "@/components/coupon-components/Coupon";

const CouponDetails = () => {
  return (
    <section>
      <PageTitle title="Coupons" button="Coupon" path="/coupon" isExport={false} />
      <Coupon />
    </section>
  );
};

export default CouponDetails;
