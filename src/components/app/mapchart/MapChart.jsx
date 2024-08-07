"use client";
import "./mapChart.scss";
const geoUrl = "/features.json";
import { geoWinkel3 } from "d3-geo-projection";
import React, { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Marker,
  Sphere,
} from "react-simple-maps";
import { useTranslations } from "next-intl";
import { collection, getDocs } from "firebase/firestore";
import db from "@/firebase/firestore.js";

export default function MapChart() {
  const t = useTranslations("mapChart");
  const [markers, setMarkers] = useState([]);
  const projection = geoWinkel3().translate([400, 300]);

  useEffect(() => {
    const getUserCoordinates = async () => {
      const userCoordinates = [];
      // "The code in this section of the project has been deleted because it contained backend information."
    };

    getUserCoordinates();
  }, []);

  return (
    <div className="mapChart pt-20 mb-20">
      <div className="container">
        <div className="mapChart-title">{t("title")}</div>
        <div className="mapChart-subtitle">{t("subtitle")}</div>
        <ComposableMap projection={projection}>
          <Graticule stroke="#1e2046" />
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                return <Geography key={geo.rsmKey} geography={geo} />;
              })
            }
          </Geographies>
          <Sphere stroke="#1e2046" strokeWidth={1} />
          {markers.map((coordinates, key) => (
            <Marker key={key} coordinates={coordinates}>
              <circle r={2} fill="#fff" />
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </div>
  );
}
