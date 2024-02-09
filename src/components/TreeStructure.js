import { useState } from "react";

const TreeStructure = ({ data, pad }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <div>
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          paddingLeft: pad * 100 + "px",
        }}
      >
        {data?.children?.length > 0 ? "📁" : "📄"}
        {data?.name}
      </div>
      {isExpanded &&
        data?.children?.map((elem) => {
          return <TreeStructure data={elem} pad={pad + 1} />;
        })}
    </div>
  );
};
export default TreeStructure;
