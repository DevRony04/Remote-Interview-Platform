import { Clock, Code2, Calendar, Users } from "lucide-react";

export const INTERVIEW_CATEGORY = [
  { id: "upcoming", title: "Upcoming Interviews", variant: "outline" },
  { id: "completed", title: "Completed", variant: "secondary" },
  { id: "succeeded", title: "Succeeded", variant: "default" },
  { id: "failed", title: "Failed", variant: "destructive" },
] as const;

export const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
];

export const QUICK_ACTIONS = [
  {
    icon: Code2,
    title: "New Call",
    description: "Start an instant call",
    color: "primary",
    gradient: "from-primary/10 via-primary/5 to-transparent",
  },
  {
    icon: Users,
    title: "Join Interview",
    description: "Enter via invitation link",
    color: "purple-500",
    gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
  },
  {
    icon: Calendar,
    title: "Schedule",
    description: "Plan upcoming interviews",
    color: "blue-500",
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
  },
  {
    icon: Clock,
    title: "Recordings",
    description: "Access past interviews",
    color: "orange-500",
    gradient: "from-orange-500/10 via-orange-500/5 to-transparent",
  },
];

export const CODING_QUESTIONS: CodeQuestion[] = [
  {
    id: "two-sum",
    title: "Two Sum",
    description:
      "Given an array of integers `nums` and an integer `target`, return indices of the two numbers in the array such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}`,
      python: `def two_sum(nums, target):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
    }
}`,
    },
    constraints: [
      "2 ≤ nums.length ≤ 104",
      "-109 ≤ nums[i] ≤ 109",
      "-109 ≤ target ≤ 109",
      "Only one valid answer exists.",
    ],
  },
  {
    id: "reverse-string",
    title: "Reverse String",
    description:
      "Write a function that reverses a string. The input string is given as an array of characters `s`.\n\nYou must do this by modifying the input array in-place with O(1) extra memory.",
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}`,
      python: `def reverse_string(s):
    # Write your solution here
    pass`,
      java: `class Solution {
    public void reverseString(char[] s) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "palindrome-number",
    title: "Palindrome Number",
    description:
      "Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.\n\nAn integer is a palindrome when it reads the same forward and backward.",
    examples: [
      {
        input: "x = 121",
        output: "true",
        explanation: "121 reads as 121 from left to right and from right to left.",
      },
      {
        input: "x = -121",
        output: "false",
        explanation:
          "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.",
      },
    ],
    starterCode: {
      javascript: `function isPalindrome(x) {
  // Write your solution here
  
}`,
      python: `def is_palindrome(x):
    # Write your solution here
    pass`,
      java: `class Solution {
    public boolean isPalindrome(int x) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    description:
      "Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.\n\nAn input string is valid if:\n- Open brackets must be closed by the same type of brackets.\n- Open brackets must be closed in the correct order.\n- Every close bracket has a corresponding open bracket of the same type.",
    examples: [
      {
        input: 's = "()"',
        output: "true",
      },
      {
        input: 's = "()[]{}"',
        output: "true",
      },
      {
        input: 's = "(]"',
        output: "false",
      },
    ],
    starterCode: {
      javascript: `function isValid(s) {
  // Write your solution here
  
}`,
      python: `def is_valid(s):
    # Write your solution here
    pass`,
      java: `class Solution {
    public boolean isValid(String s) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    description:
      "Given an integer array `nums`, find the subarray with the largest sum, and return its sum.",
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
      },
    ],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}`,
      python: `def max_sub_array(nums):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int maxSubArray(int[] nums) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "merge-two-sorted-lists",
    title: "Merge Two Sorted Lists",
    description:
      "You are given the heads of two sorted linked lists `list1` and `list2`.\n\nMerge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.\n\nReturn the head of the merged linked list.",
    examples: [
      {
        input: "list1 = [1,2,4], list2 = [1,3,4]",
        output: "[1,1,2,3,4,4]",
      },
      {
        input: "list1 = [], list2 = []",
        output: "[]",
      },
      {
        input: "list1 = [], list2 = [0]",
        output: "[0]",
      },
    ],
    starterCode: {
      javascript: `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function mergeTwoLists(list1, list2) {
  // Write your solution here
  
}`,
      python: `# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
def merge_two_lists(list1, list2):
    # Write your solution here
    pass`,
      java: `/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    description:
      "You are climbing a staircase. It takes `n` steps to reach the top.\n\nEach time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?",
    examples: [
      {
        input: "n = 2",
        output: "2",
        explanation: "There are two ways to climb to the top.\n1. 1 step + 1 step\n2. 2 steps",
      },
      {
        input: "n = 3",
        output: "3",
        explanation: "There are three ways to climb to the top.\n1. 1 step + 1 step + 1 step\n2. 1 step + 2 steps\n3. 2 steps + 1 step",
      },
    ],
    starterCode: {
      javascript: `function climbStairs(n) {
  // Write your solution here
  
}`,
      python: `def climb_stairs(n):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int climbStairs(int n) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "binary-tree-inorder-traversal",
    title: "Binary Tree Inorder Traversal",
    description:
      "Given the `root` of a binary tree, return the inorder traversal of its nodes' values.",
    examples: [
      {
        input: "root = [1,null,2,3]",
        output: "[1,3,2]",
      },
      {
        input: "root = []",
        output: "[]",
      },
      {
        input: "root = [1]",
        output: "[1]",
      },
    ],
    starterCode: {
      javascript: `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function inorderTraversal(root) {
  // Write your solution here
  
}`,
      python: `# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
def inorder_traversal(root):
    # Write your solution here
    pass`,
      java: `/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "symmetric-tree",
    title: "Symmetric Tree",
    description:
      "Given the `root` of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).",
    examples: [
      {
        input: "root = [1,2,2,3,4,4,3]",
        output: "true",
      },
      {
        input: "root = [1,2,2,null,3,null,3]",
        output: "false",
      },
    ],
    starterCode: {
      javascript: `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function isSymmetric(root) {
  // Write your solution here
  
}`,
      python: `# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
def is_symmetric(root):
    # Write your solution here
    pass`,
      java: `/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public boolean isSymmetric(TreeNode root) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "maximum-depth-of-binary-tree",
    title: "Maximum Depth of Binary Tree",
    description:
      "Given the `root` of a binary tree, return its maximum depth.\n\nA binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "3",
      },
      {
        input: "root = [1,null,2]",
        output: "2",
      },
    ],
    starterCode: {
      javascript: `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function maxDepth(root) {
  // Write your solution here
  
}`,
      python: `# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
def max_depth(root):
    # Write your solution here
    pass`,
      java: `/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int maxDepth(TreeNode root) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "convert-sorted-array-to-binary-search-tree",
    title: "Convert Sorted Array to Binary Search Tree",
    description:
      "Given an integer array `nums` where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.\n\nA height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.",
    examples: [
      {
        input: "nums = [-10,-3,0,5,9]",
        output: "[0,-3,9,-10,null,5]",
        explanation: "[0,-10,5,null,-3,null,9] is also accepted:",
      },
      {
        input: "nums = [1,3]",
        output: "[3,1]",
        explanation: "[1,null,3] and [3,1] are both height-balanced BSTs.",
      },
    ],
    starterCode: {
      javascript: `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function sortedArrayToBST(nums) {
  // Write your solution here
  
}`,
      python: `# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
def sorted_array_to_bst(nums):
    # Write your solution here
    pass`,
      java: `/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public TreeNode sortedArrayToBST(int[] nums) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "balanced-binary-tree",
    title: "Balanced Binary Tree",
    description:
      "Given a binary tree, determine if it is height-balanced.\n\nA height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.",
    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "true",
      },
      {
        input: "root = [1,2,2,3,3,null,null,4,4]",
        output: "false",
      },
      {
        input: "root = []",
        output: "true",
      },
    ],
    starterCode: {
      javascript: `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function isBalanced(root) {
  // Write your solution here
  
}`,
      python: `# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
def is_balanced(root):
    # Write your solution here
    pass`,
      java: `/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public boolean isBalanced(TreeNode root) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "remove-duplicates-from-sorted-array",
    title: "Remove Duplicates from Sorted Array",
    description:
      "Given an integer array `nums` sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.\n\nSince it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array `nums`. More formally, if there are `k` elements after removing the duplicates, then the first `k` elements of `nums` should hold the final result. It does not matter what you leave beyond the first `k` elements.\n\nReturn `k` after placing the final result in the first `k` slots of `nums`.",
    examples: [
      {
        input: "nums = [1,1,2]",
        output: "2, nums = [1,2,_]",
        explanation: "Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.",
      },
      {
        input: "nums = [0,0,1,1,1,2,2,3,3,4]",
        output: "5, nums = [0,1,2,3,4,_,_,_,_,_]",
        explanation: "Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.",
      },
    ],
    starterCode: {
      javascript: `function removeDuplicates(nums) {
  // Write your solution here
  
}`,
      python: `def remove_duplicates(nums):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int removeDuplicates(int[] nums) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    description:
      "You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.\n\nYou want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.\n\nReturn the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.",
    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.",
      },
      {
        input: "prices = [7,6,4,3,1]",
        output: "0",
        explanation: "In this case, no transactions are done and the max profit = 0.",
      },
    ],
    starterCode: {
      javascript: `function maxProfit(prices) {
  // Write your solution here
  
}`,
      python: `def max_profit(prices):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int maxProfit(int[] prices) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "single-number",
    title: "Single Number",
    description:
      "Given a non-empty array of integers `nums`, every element appears twice except for one. Find that single one.\n\nYou must implement a solution with a linear runtime complexity and use only constant extra space.",
    examples: [
      {
        input: "nums = [2,2,1]",
        output: "1",
      },
      {
        input: "nums = [4,1,2,1,2]",
        output: "4",
      },
      {
        input: "nums = [1]",
        output: "1",
      },
    ],
    starterCode: {
      javascript: `function singleNumber(nums) {
  // Write your solution here
  
}`,
      python: `def single_number(nums):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int singleNumber(int[] nums) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    description:
      "Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.",
    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "true",
      },
      {
        input: "nums = [1,2,3,4]",
        output: "false",
      },
      {
        input: "nums = [1,1,1,3,3,4,3,2,4,2]",
        output: "true",
      },
    ],
    starterCode: {
      javascript: `function containsDuplicate(nums) {
  // Write your solution here
  
}`,
      python: `def contains_duplicate(nums):
    # Write your solution here
    pass`,
      java: `class Solution {
    public boolean containsDuplicate(int[] nums) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "missing-number",
    title: "Missing Number",
    description:
      "Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the only number in the range that is missing from the array.",
    examples: [
      {
        input: "nums = [3,0,1]",
        output: "2",
        explanation: "n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.",
      },
      {
        input: "nums = [0,1]",
        output: "2",
        explanation: "n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.",
      },
      {
        input: "nums = [9,6,4,2,3,5,7,0,1]",
        output: "8",
        explanation: "n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.",
      },
    ],
    starterCode: {
      javascript: `function missingNumber(nums) {
  // Write your solution here
  
}`,
      python: `def missing_number(nums):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int missingNumber(int[] nums) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "move-zeroes",
    title: "Move Zeroes",
    description:
      "Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.\n\nNote that you must do this in-place without making a copy of the array.",
    examples: [
      {
        input: "nums = [0,1,0,3,12]",
        output: "[1,3,12,0,0]",
      },
      {
        input: "nums = [0]",
        output: "[0]",
      },
    ],
    starterCode: {
      javascript: `function moveZeroes(nums) {
  // Write your solution here
  
}`,
      python: `def move_zeroes(nums):
    # Write your solution here
    pass`,
      java: `class Solution {
    public void moveZeroes(int[] nums) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "reverse-integer",
    title: "Reverse Integer",
    description:
      "Given a signed 32-bit integer `x`, return `x` with its digits reversed. If reversing `x` causes the value to go outside the signed 32-bit integer range `[-231, 231 - 1]`, then return `0`.\n\nAssume the environment does not allow you to store 64-bit integers (signed or unsigned).",
    examples: [
      {
        input: "x = 123",
        output: "321",
      },
      {
        input: "x = -123",
        output: "-321",
      },
      {
        input: "x = 120",
        output: "21",
      },
    ],
    starterCode: {
      javascript: `function reverse(x) {
  // Write your solution here
  
}`,
      python: `def reverse(x):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int reverse(int x) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "first-unique-character-in-a-string",
    title: "First Unique Character in a String",
    description:
      "Given a string `s`, find the first non-repeating character in it and return its index. If it does not exist, return `-1`.",
    examples: [
      {
        input: 's = "leetcode"',
        output: "0",
      },
      {
        input: 's = "loveleetcode"',
        output: "2",
      },
      {
        input: 's = "aabb"',
        output: "-1",
      },
    ],
    starterCode: {
      javascript: `function firstUniqChar(s) {
  // Write your solution here
  
}`,
      python: `def first_uniq_char(s):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int firstUniqChar(String s) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "valid-anagram",
    title: "Valid Anagram",
    description:
      "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.\n\nAn Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
    examples: [
      {
        input: 's = "anagram", t = "nagaram"',
        output: "true",
      },
      {
        input: 's = "rat", t = "car"',
        output: "false",
      },
    ],
    starterCode: {
      javascript: `function isAnagram(s, t) {
  // Write your solution here
  
}`,
      python: `def is_anagram(s, t):
    # Write your solution here
    pass`,
      java: `class Solution {
    public boolean isAnagram(String s, String t) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "implement-strstr",
    title: "Implement strStr()",
    description:
      "Implement strStr().\n\nGiven two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.\n\nClarification:\nWhat should we return when `needle` is an empty string? This is a great question to ask during an interview.\n\nFor the purpose of this problem, we will return 0 when `needle` is an empty string. This is consistent to C's strstr() and Java's indexOf().",
    examples: [
      {
        input: 'haystack = "hello", needle = "ll"',
        output: "2",
      },
      {
        input: 'haystack = "aaaaa", needle = "bba"',
        output: "-1",
      },
      {
        input: 'haystack = "", needle = ""',
        output: "0",
      },
    ],
    starterCode: {
      javascript: `function strStr(haystack, needle) {
  // Write your solution here
  
}`,
      python: `def str_str(haystack, needle):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int strStr(String haystack, String needle) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "longest-common-prefix",
    title: "Longest Common Prefix",
    description:
      "Write a function to find the longest common prefix string amongst an array of strings.\n\nIf there is no common prefix, return an empty string `\"\"`.",
    examples: [
      {
        input: 'strs = ["flower","flow","flight"]',
        output: '"fl"',
      },
      {
        input: 'strs = ["dog","racecar","car"]',
        output: '""',
        explanation: "There is no common prefix among the input strings.",
      },
    ],
    starterCode: {
      javascript: `function longestCommonPrefix(strs) {
  // Write your solution here
  
}`,
      python: `def longest_common_prefix(strs):
    # Write your solution here
    pass`,
      java: `class Solution {
    public String longestCommonPrefix(String[] strs) {
        // Write your solution here
        
    }
}`,
    },
  },
];

export const LANGUAGES = [
  { id: "javascript", name: "JavaScript", icon: "/javascript.png" },
  { id: "python", name: "Python", icon: "/python.png" },
  { id: "java", name: "Java", icon: "/java.png" },
] as const;

export interface CodeQuestion {
  id: string;
  title: string;
  description: string;
  examples: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
  starterCode: {
    javascript: string;
    python: string;
    java: string;
  };
  constraints?: string[];
}

export type QuickActionType = (typeof QUICK_ACTIONS)[number];