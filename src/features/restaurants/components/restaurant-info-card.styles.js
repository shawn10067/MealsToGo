import React from "react";
import { Image } from "react-native";
import { Card as PaperCard } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

export const StarSvg = () => {
  return <SvgXml xml={star} width={20} height={20} />;
};

export const OpenSvg = ({ isOpen }) => {
  if (isOpen) {
    return <SvgXml xml={open} width={25} height={25} />;
  } else {
    return null;
  }
};

export const StyledIcon = styled(Image)`
  height: 15px;
  width: 15px;
`;

export const Icon = ({ uri }) => <StyledIcon source={{ uri }} />;

export const Card = styled(PaperCard)`
  padding: ${({ theme }) => theme.space.lg};
  background-color: white;
  border-radius: ${({ theme }) => theme.sizes.sm};
  margin-bottom: ${({ theme }) => theme.space.md};
`;

export const CardInfoContainer = styled.View`
  padding-top: ${({ theme }) => theme.space.lg};
`;

export const CardIconInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-right: ${({ theme }) => theme.space.md};
`;

export const Cover = styled(PaperCard.Cover)`
  width: 100%;
  height: 160px;
  border-top-left-radius: ${({ theme }) => theme.sizes.sm};
  border-top-right-radius: ${({ theme }) => theme.sizes.sm};
  border-bottom-left-radius: ${({ theme }) => theme.sizes.sm};
  border-bottom-right-radius: ${({ theme }) => theme.sizes.sm};
`;

export const CardIconStatus = styled.View`
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
export const CardStars = styled.View`
  flex-grow: 0;
  flex-direction: row;
  padding-top: ${({ theme }) => theme.space.md};
  padding-bottom: ${({ theme }) => theme.space.md};
`;
