import React from "react";
import { useQuery } from "urql";

interface Props {
  user?: string;
}

const BasicQuery = `
  query ExampleQuery {
    users {
      name
    }
  }
`;

const Console: React.FC<Props> = () => {
  const [result, reQuery] = useQuery({
    query: BasicQuery,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p className="text-blue-500">Loading...</p>;
  if (error) return <p className="text-red-600">Error...</p>;
  return (
    <div>
      <div>{JSON.stringify(data, null, 2)}</div>
    </div>
  );
};

export default Console;
