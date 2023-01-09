'use client'
import React from "react";

// components

import CardStats from "../Cards/CardStats";

export default function HeaderStats({ data }) {
  const total = data.drivers + data.users
  return (
    <>
      {/* Header */}
      <div className="relative bg-blueGray-800 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Drivers"
                  statTitle={data.drivers + ''}
                  statArrow="up"
                  statPercent={((data.drivers / total) * 100).toPrecision(2)}
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-user-circle"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Users"
                  statTitle={data.users  + ''}
                  statArrow="down"
                  statPercent={((data.users / total) * 100).toPrecision(2)}
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-users"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Payments"
                  statTitle={data.transactions  + ''}
                  statArrow="down"
                  statPercent={(data.transactions / data.users).toFixed(2)}
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-credit-card"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Trips"
                  statTitle={data.requests  + ''}
                  statArrow="up"
                  statPercent={(data.requests / data.users).toPrecision(2)}
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-suitcase"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
