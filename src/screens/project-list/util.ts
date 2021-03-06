import { useMemo } from "react";
import { useUrlQueryParam } from "utils/url";

export const useProjectsSearchParams = () => {
  const [param, setParam] = useUrlQueryParam(["name", "personId"]);
  const projectParam = useMemo(() => {
    return {
      ...param,
      personId: Number(param.personId) || undefined,
    };
  }, [param]);
  return [projectParam, setParam] as const;
};
