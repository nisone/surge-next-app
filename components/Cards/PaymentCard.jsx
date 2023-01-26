import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

export default function PaymentCard({
    paymentData
}) {
  return (
    <Link href={"/admin/trip"}>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-3 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              
              <span className="font-semibold text-xl text-slate-700">
                {paymentData.user_email}
              </span>
              <h5 className={(paymentData.status == 'success' ? 'text-green-400' :  "text-slate-400") + " uppercase font-bold text-xs"}>
                {paymentData.status}
              </h5>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
                {/* Side circle space */}
              <div
                className={
                  "text-black p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                  'statIconColor'
                }
              >
                <i className={'statIconName'}> </i>
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-600 mt-4">
            <span className={'statPercentColor' + " mr-2"}>
              <i
                className={
                  'statArrow' === "up"
                    ? "fas fa-arrow-up"
                    : 'statArrow' === "down"
                    ? "fas fa-arrow-down"
                    : ""
                }
              ></i>{" "}
              {'Amount: '}
            </span>
            <span className="whitespace-nowrap font-bold">{paymentData.amount}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

// CardStats.defaultProps = {
//   statSubtitle: "Traffic",
//   statTitle: "350,897",
//   statArrow: "up",
//   statPercent: "3.48",
//   statPercentColor: "text-emerald-500",
//   statDescripiron: "Since last month",
//   statIconName: "far fa-chart-bar",
//   statIconColor: "bg-red-500",
// };

// CardStats.propTypes = {
//   statSubtitle: PropTypes.string,
//   statTitle: PropTypes.string,
//   statArrow: PropTypes.oneOf(["up", "down"]),
//   statPercent: PropTypes.string,
//   // can be any of the text color utilities
//   // from tailwindcss
//   statPercentColor: PropTypes.string,
//   statDescripiron: PropTypes.string,
//   statIconName: PropTypes.string,
//   // can be any of the background color utilities
//   // from tailwindcss
//   statIconColor: PropTypes.string,
// };
