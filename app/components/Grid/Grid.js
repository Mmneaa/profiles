"use client";
import { useEffect, useState } from "react";
import GridCard from "../Grid-Card/grid-card";
import styles from "./Grid.module.css";

export default function Grid() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://679fab9824322f8329c455c6.mockapi.io/api-profile/v1/Profiles"
      );
      const data = await res.json();
      setProfiles(data);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.grid}>
      {profiles.map((profile) => (
        <GridCard key={profile.id} {...profile} />
      ))}
    </div>
  );
}
