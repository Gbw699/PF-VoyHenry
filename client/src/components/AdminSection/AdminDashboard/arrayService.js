
export default function arrayService(argt) {
  const obj = {
    "01": [],
    "02": [],
    "03": [],
    "04": [],
    "05": [],
    "06": [],
    "07": [],
    "08": [],
    "09": [],
    "10": [],
    "11": [],
    "12": [],
  };

  argt.forEach((arg) => {
    obj[arg.createdAt.split("-")[1]].push(arg);
  });

  const resultArray = [
    obj["01"].length,
    obj["02"].length,
    obj["03"].length,
    obj["04"].length,
    obj["05"].length,
    obj["06"].length,
    obj["07"].length,
    obj["08"].length,
    obj["09"].length,
    obj["10"].length,
    obj["11"].length,
    obj["12"].length,
  ];

  return resultArray;
}
