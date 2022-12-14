import aa from "./assets/aa.PDF";
import bb from "./assets/bb.pdf";
import cc from "./assets/cc.PDF";
import dd from "./assets/dd.pdf";
import ee from "./assets/ee.pdf";
import ff from "./assets/ff.PDF";
import gg from "./assets/gg.pdf";
import hh from "./assets/hh.PDF";
import ii from "./assets/ii.PDF";
import jj from "./assets/jj.pdf";

export const colorStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "white", height: hi }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return { ...styles, height: hi };
  },
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      height: hi,
      color: "black",
    };
  },
  multiValueLabel: (styles, { data }) => {
    return {
      ...styles,
      height: hi,
      // color: "#fff",
    };
  },
  multiValueRemove: (styles, { data }) => {
    return {
      ...styles,
      color: "#fff",
      height: hi,
      cursor: "pointer",
      ":hover": {
        color: "#fff",
      },
    };
  },
};

export const pdfs = [
  {
    isSIgned: false,
    DocNumber: 3276,
    AccountKey: "6107",
    DocumentDetails: "0505455699",
    DocUrl: aa,
  },
  {
    isSIgned: false,
    DocNumber: 4530,
    AccountKey: "6900",
    DocumentDetails: "05066558764",
    DocUrl: bb,
  },
  {
    isSIgned: false,
    DocNumber: 2312,
    AccountKey: "6207",
    DocumentDetails: "0506612313",
    DocUrl: cc,
  },
  {
    isSIgned: false,
    DocNumber: 3320,
    AccountKey: "6707",
    DocumentDetails: "0506655632",
    DocUrl: dd,
  },
  {
    isSIgned: false,
    DocNumber: 3530,
    AccountKey: "6531",
    Phone: "0501231231",
    DocUrl: ee,
  },
  {
    isSIgned: false,
    DocNumber: 3230,
    AccountKey: "6051",
    Phone: "0506655698",
    DocUrl: ff,
  },
  {
    isSIgned: false,
    DocNumber: 4230,
    AccountKey: "6031",
    Phone: "0509980680",
    DocUrl: gg,
  },
  {
    isSIgned: false,
    DocNumber: 3230,
    AccountKey: "6031",
    Phone: "0509980680",
    DocUrl: hh,
  },
  {
    isSIgned: false,
    DocNumber: 3254,
    AccountKey: "6051",

    Phone: "0506655699",
    DocUrl: ii,
  },

  {
    isSIgned: false,
    DocNumber: 3342,
    AccountKey: "6107",
    Phone: "0506655699",
    DocUrl: jj,
  },
];

export const castumersList = [
  { value: "6107", label: "??????" },
  { value: "6900", label: "??????????" },
  { value: "6031", label: "??????" },
  { value: "6051", label: "????" },
  { value: "6531", label: "??????" },
  { value: "6707", label: "???????? ??????" },
  { value: "6061", label: "?????? ??????????" },
  { value: "6207", label: "?????? ????????" },
];

export const signersList = [
  {
    signerData: { value: "7001", label: "??????" },
    relatedAccounts: ["6107", "6900"],
  },
  {
    signerData: { value: "7002", label: "????????" },
    relatedAccounts: ["6031", "6051", "6531", "6707"],
  },

  { signerData: { value: "7003", label: "????????" }, relatedAccounts: ["6061"] },
  {
    signerData: { value: "7004", label: "?????? ??????????" },
    relatedAccounts: ["6207"],
  },
];
