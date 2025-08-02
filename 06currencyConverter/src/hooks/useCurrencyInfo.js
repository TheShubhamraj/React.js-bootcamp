import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.rates); // ✅ Correct structure
      })
      .catch((err) => {
        console.error("Failed to fetch currency data:", err);
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
