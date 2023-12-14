import Table from "@/components/util/Table";
import Tab from "@/components/util/Tab";
export default function Page() {
  const header = ["Event Name", "Description", "Date", "Created By"];
  const tabs = ["All Events", "My Events", "Registered Events"];
  const data = [
    {
      "Event Name": "abc",
      Description: 1,
      Date: "2023-12-10",
      "Created By": "Ahmed",
    },
    {
      "Event Name": "abc",
      Description: 1,
      Date: "2023-12-10",
      "Created By": "Ahmed",
    },
    {
      "Event Name": "abc",
      Description: 1,
      Date: "2023-12-10",
      "Created By": "Ahmed",
    },
    {
      "Event Name": "abc",
      Description: 1,
      Date: "2023-12-10",
      "Created By": "Ahmed",
    },
  ];
  return (
    <>
      <h1>Event Route</h1>
      <div className="p-4">
        <Tab data={tabs} />
      </div>
      <div className="p-4">
        <Table data={data} header={header} />
      </div>
    </>
  );
}
