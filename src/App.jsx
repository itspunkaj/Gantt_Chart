function getDates(startDate, endDate) {
  const dates = [];
  let currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates;
}

const firstDate = new Date("2024-03-01");
const lastDate = new Date("2024-03-10");
const datesArray = getDates(firstDate, lastDate);

const tasks = [
  {
    id: 1,
    title: "Task 1",
    start_date: new Date("2024-03-01"),
    end_date: new Date("2024-03-04"),
  },
  {
    id: 2,
    title: "Task 2",
    start_date: new Date("2024-03-03"),
    end_date: new Date("2024-03-04"),
  },
  {
    id: 3,
    title: "Task 3",
    start_date: new Date("2024-03-05"),
    end_date: new Date("2024-03-09"),
  },
  {
    id: 4,
    title: "Task 4",
    start_date: new Date("2024-03-02"),
    end_date: new Date("2024-03-10"),
  },
];

export default function App() {
  return (
    <div className="flex justify-center flex-col items-center bg-green-100 w-full h-auto">
      <table className="w-4/5 h-96 table-auto border-collapse m-20">
        <thead className="bg-sky-300">
          <tr>
            <th className="border border-slate-600"></th>
            {datesArray.map((date,index) => {
              const options = {month : 'short', day:'2-digit'};
              return (
                <th className="border border-slate-600" key={index}>{date.toLocaleDateString('en-US',options)}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {tasks.map((task,index) => {
            return (
              <tr key={index}>
                <td className="border-2 border-slate-600 bg-sky-400">{task.title}</td>
                {datesArray.map((date,index) => {
                  const isWithinDates = date >= task.start_date && date <= task.end_date;
                  const customStyles = isWithinDates ? "bg-blue-600" : "";
                  return (
                    <td key = {index}>
                      <div className={`w-full h-4/5 ${customStyles}`}></div>
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>

      <div className="grid grid-cols-12 h-auto w-4/5">
        <div className="bg-red-600 col-span-2 border border-slate-600"></div>
        {datesArray.map((date,index)=>{
          const options = {month : 'short', day: '2-digit'};
          return (
            <div key={index} className="bg-green-600 font-bold col-span-1 flex justify-center items-center border border-slate-600">{date.toLocaleDateString('en-US',options)}</div>
          );
        })}
        {tasks.map((task,index)=>{
          return (
            <>
            <div key={index} className="flex justify-center items-center col-span-2 bg-blue-300 h-10 border border-slate-600 font-bold py-6">{task.title}</div>
            {datesArray.map((date,index)=>{
              const customStyles = (date >= task.start_date && date <= task.end_date) ? "bg-blue-600" : "" ;
              {/* const startDateStyles = (date === task.start_date) ? "rounded-l-3xl" : ""; */}
              {/* const endDateStyles = (date === task.start_date) ? "rounded-r-lg" : ""; */}
              return (
                <div key={index} className="col-span-1 flex justify-center items-center">
                  <div className={`${customStyles}  w-full h-4/5`}></div>
                </div>
              )
            })}
            </>
          )
        })}
      </div>
    </div>
  );
}
