import type { TreeNode } from "@getsoren/types-treege";

export const isTreeNode = (node: unknown | undefined): node is TreeNode =>
  !(!node || typeof node !== "object" || !("uuid" in node) || !("attributes" in node) || !("children" in node));

const TypeGuards = {
  isTreeNode,
};

export default TypeGuards;
