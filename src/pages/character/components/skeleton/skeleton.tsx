import * as CH from "@chakra-ui/react";
import React from "react";

const Skeleton: React.FC = () => {
  return (
    <>
      <CH.Breadcrumb>
        <CH.BreadcrumbItem>
          <CH.SkeletonText noOfLines={1} width={16} />
        </CH.BreadcrumbItem>

        <CH.BreadcrumbItem>
          <CH.SkeletonText noOfLines={1} width={16} />
        </CH.BreadcrumbItem>
      </CH.Breadcrumb>

      <CH.Flex gap={8} mt={8}>
        <CH.Skeleton
          width="300px"
          height="300px"
          boxShadow="lg"
          borderRadius="lg"
        />
        <CH.VStack alignItems="flex-start" spacing={4}>
          <CH.Skeleton height={10} width={60} />
          <CH.Skeleton height={4} width={40} />
          <CH.Skeleton height={4} width={40} />
          <CH.Skeleton height={4} width={40} />
        </CH.VStack>
      </CH.Flex>
    </>
  );
};

export default Skeleton;
