const objNest = {
  data: [
    { name: "Sk", city: "Pune" },
    {
      name: "Sk",
      city: "Pune",
    },
    {
      name: "Sk",
      city: "Pune",
    },
    {
      name: "Sk",
      city: "Pune",
    },
  ],
};
const filteredData = objNest.data.map((item) => item.name);
console.log(filteredData);
