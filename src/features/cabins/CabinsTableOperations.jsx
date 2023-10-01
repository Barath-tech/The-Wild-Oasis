import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
function CabinsTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField={"discount"}
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "WIth Discount" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinsTableOperations;
