/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import APIReferenceIcon from './APIReferenceIcon.vue';
import ArticleIcon from './ArticleIcon.vue';
import CheckCircleIcon from './CheckCircleIcon.vue';
import CheckmarkIcon from './CheckmarkIcon.vue';
import ChevronIcon from './ChevronIcon.vue';
import ChevronRoundedIcon from './ChevronRoundedIcon.vue';
import ChevronThickIcon from './ChevronThickIcon.vue';
import ClearRoundedIcon from './ClearRoundedIcon.vue';
import CloseIcon from './CloseIcon.vue';
import CollectionIcon from './CollectionIcon.vue';
import CopyIcon from './CopyIcon.vue';
import CrossIcon from './CrossIcon.vue';
import CurlyBracketsIcon from './CurlyBracketsIcon.vue';
import DiagonalArrowIcon from './DiagonalArrowIcon.vue';
import DocumentIcon from './DocumentIcon.vue';
import DownloadIcon from './DownloadIcon.vue';
import EllipsisIcon from './EllipsisIcon.vue';
import EndpointIcon from './EndpointIcon.vue';
import FilterIcon from './FilterIcon.vue';
import ForumIcon from './ForumIcon.vue';
import GenericFileIcon from './GenericFileIcon.vue';
import InlineChevronDownCircleIcon from './InlineChevronDownCircleIcon.vue';
import InlineChevronDownIcon from './InlineChevronDownIcon.vue';
import InlineChevronRightIcon from './InlineChevronRightIcon.vue';
import InlineCloseIcon from './InlineCloseIcon.vue';
import InlineDownloadIcon from './InlineDownloadIcon.vue';
import InlineMinusCircleSolidIcon from './InlineMinusCircleSolidIcon.vue';
import InlinePlusCircleIcon from './InlinePlusCircleIcon.vue';
import InlinePlusCircleSolidIcon from './InlinePlusCircleSolidIcon.vue';
import InlineReplayIcon from './InlineReplayIcon.vue';
import LinkIcon from './LinkIcon.vue';
import MagnifierIcon from './MagnifierIcon.vue';
import PathIcon from './PathIcon.vue';
import PauseIcon from './PauseIcon.vue';
import PlayIcon from './PlayIcon.vue';
import ResetCircleIcon from './ResetCircleIcon.vue';
import SearchIcon from './SearchIcon.vue';
import SidenavIcon from './SidenavIcon.vue';
import SingleLetterSymbolIcon from './SingleLetterSymbolIcon.vue';
import SwiftFileIcon from './SwiftFileIcon.vue';
import TechnologyIcon from './TechnologyIcon.vue';
import TimerIcon from './TimerIcon.vue';
import TopicFuncIcon from './TopicFuncIcon.vue';
import TopicFuncOpIcon from './TopicFuncOpIcon.vue';
import TopicSubscriptIcon from './TopicSubscriptIcon.vue';
import TutorialIcon from './TutorialIcon.vue';
import TwoLetterSymbolIcon from './TwoLetterSymbolIcon.vue';
import XcodeIcon from './XcodeIcon.vue';

export default {
  title: 'Icons',
};

// All icons displayed together in a responsive grid.
export const AllIcons = () => ({
  components: {
    APIReferenceIcon,
    ArticleIcon,
    CheckCircleIcon,
    CheckmarkIcon,
    ChevronIcon,
    ChevronRoundedIcon,
    ChevronThickIcon,
    ClearRoundedIcon,
    CloseIcon,
    CollectionIcon,
    CopyIcon,
    CrossIcon,
    CurlyBracketsIcon,
    DiagonalArrowIcon,
    DocumentIcon,
    DownloadIcon,
    EllipsisIcon,
    EndpointIcon,
    FilterIcon,
    ForumIcon,
    GenericFileIcon,
    InlineChevronDownCircleIcon,
    InlineChevronDownIcon,
    InlineChevronRightIcon,
    InlineCloseIcon,
    InlineDownloadIcon,
    InlineMinusCircleSolidIcon,
    InlinePlusCircleIcon,
    InlinePlusCircleSolidIcon,
    InlineReplayIcon,
    LinkIcon,
    MagnifierIcon,
    PathIcon,
    PauseIcon,
    PlayIcon,
    ResetCircleIcon,
    SearchIcon,
    SidenavIcon,
    SingleLetterSymbolIcon,
    SwiftFileIcon,
    TechnologyIcon,
    TimerIcon,
    TopicFuncIcon,
    TopicFuncOpIcon,
    TopicSubscriptIcon,
    TutorialIcon,
    TwoLetterSymbolIcon,
    XcodeIcon,
  },
  template: `
    <div style="display: grid; grid-template-columns: repeat(auto-fill, 120px); gap: 1rem; padding: 1rem;">
      <div v-for="icon in icons" :key="icon.name" style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <component :is="icon.component" v-bind="icon.props || {}" style="width: 24px; height: 24px;" />
        <span style="font-size: 11px; text-align: center; word-break: break-word;">{{ icon.name }}</span>
      </div>
    </div>
  `,
  data() {
    return {
      icons: [
        { name: 'APIReferenceIcon', component: APIReferenceIcon },
        { name: 'ArticleIcon', component: ArticleIcon },
        { name: 'CheckCircleIcon', component: CheckCircleIcon },
        { name: 'CheckmarkIcon', component: CheckmarkIcon },
        { name: 'ChevronIcon', component: ChevronIcon },
        { name: 'ChevronRoundedIcon', component: ChevronRoundedIcon },
        { name: 'ChevronThickIcon', component: ChevronThickIcon },
        { name: 'ClearRoundedIcon', component: ClearRoundedIcon },
        { name: 'CloseIcon', component: CloseIcon },
        { name: 'CollectionIcon', component: CollectionIcon },
        { name: 'CopyIcon', component: CopyIcon },
        { name: 'CrossIcon', component: CrossIcon },
        { name: 'CurlyBracketsIcon', component: CurlyBracketsIcon },
        { name: 'DiagonalArrowIcon', component: DiagonalArrowIcon },
        { name: 'DocumentIcon', component: DocumentIcon },
        { name: 'DownloadIcon', component: DownloadIcon },
        { name: 'EllipsisIcon', component: EllipsisIcon },
        { name: 'EndpointIcon', component: EndpointIcon },
        { name: 'FilterIcon', component: FilterIcon },
        { name: 'ForumIcon', component: ForumIcon },
        { name: 'GenericFileIcon', component: GenericFileIcon },
        { name: 'InlineChevronDownCircleIcon', component: InlineChevronDownCircleIcon },
        { name: 'InlineChevronDownIcon', component: InlineChevronDownIcon },
        { name: 'InlineChevronRightIcon', component: InlineChevronRightIcon },
        { name: 'InlineCloseIcon', component: InlineCloseIcon },
        { name: 'InlineDownloadIcon', component: InlineDownloadIcon },
        { name: 'InlineMinusCircleSolidIcon', component: InlineMinusCircleSolidIcon },
        { name: 'InlinePlusCircleIcon', component: InlinePlusCircleIcon },
        { name: 'InlinePlusCircleSolidIcon', component: InlinePlusCircleSolidIcon },
        { name: 'InlineReplayIcon', component: InlineReplayIcon },
        { name: 'LinkIcon', component: LinkIcon },
        { name: 'MagnifierIcon', component: MagnifierIcon },
        { name: 'PathIcon', component: PathIcon },
        { name: 'PauseIcon', component: PauseIcon },
        { name: 'PlayIcon', component: PlayIcon },
        { name: 'ResetCircleIcon', component: ResetCircleIcon },
        { name: 'SearchIcon', component: SearchIcon },
        { name: 'SidenavIcon', component: SidenavIcon },
        { name: 'SingleLetterSymbolIcon', component: SingleLetterSymbolIcon, props: { symbol: 'S' } },
        { name: 'SwiftFileIcon', component: SwiftFileIcon },
        { name: 'TechnologyIcon', component: TechnologyIcon },
        { name: 'TimerIcon', component: TimerIcon },
        { name: 'TopicFuncIcon', component: TopicFuncIcon },
        { name: 'TopicFuncOpIcon', component: TopicFuncOpIcon },
        { name: 'TopicSubscriptIcon', component: TopicSubscriptIcon },
        { name: 'TutorialIcon', component: TutorialIcon },
        { name: 'TwoLetterSymbolIcon', component: TwoLetterSymbolIcon, props: { first: 'T', second: 'L' } },
        { name: 'XcodeIcon', component: XcodeIcon },
      ],
    };
  },
});

// Individual stories

export const APIReference = () => ({
  components: { APIReferenceIcon },
  template: '<APIReferenceIcon style="width:32px;height:32px;" />',
});

export const Article = () => ({
  components: { ArticleIcon },
  template: '<ArticleIcon style="width:32px;height:32px;" />',
});

export const CheckCircle = () => ({
  components: { CheckCircleIcon },
  template: '<CheckCircleIcon style="width:32px;height:32px;" />',
});

export const Checkmark = () => ({
  components: { CheckmarkIcon },
  template: '<CheckmarkIcon style="width:32px;height:32px;" />',
});

export const Chevron = () => ({
  components: { ChevronIcon },
  template: '<ChevronIcon style="width:32px;height:32px;" />',
});

export const ChevronRounded = () => ({
  components: { ChevronRoundedIcon },
  template: '<ChevronRoundedIcon style="width:32px;height:32px;" />',
});

export const ChevronThick = () => ({
  components: { ChevronThickIcon },
  template: '<ChevronThickIcon style="width:32px;height:32px;" />',
});

export const ClearRounded = () => ({
  components: { ClearRoundedIcon },
  template: '<ClearRoundedIcon style="width:32px;height:32px;" />',
});

export const Close = () => ({
  components: { CloseIcon },
  template: '<CloseIcon style="width:32px;height:32px;" />',
});

export const Collection = () => ({
  components: { CollectionIcon },
  template: '<CollectionIcon style="width:32px;height:32px;" />',
});

export const Copy = () => ({
  components: { CopyIcon },
  template: '<CopyIcon style="width:32px;height:32px;" />',
});

export const Cross = () => ({
  components: { CrossIcon },
  template: '<CrossIcon style="width:32px;height:32px;" />',
});

export const CurlyBrackets = () => ({
  components: { CurlyBracketsIcon },
  template: '<CurlyBracketsIcon style="width:32px;height:32px;" />',
});

export const DiagonalArrow = () => ({
  components: { DiagonalArrowIcon },
  template: '<DiagonalArrowIcon style="width:32px;height:32px;" />',
});

export const Document = () => ({
  components: { DocumentIcon },
  template: '<DocumentIcon style="width:32px;height:32px;" />',
});

export const Download = () => ({
  components: { DownloadIcon },
  template: '<DownloadIcon style="width:32px;height:32px;" />',
});

export const Ellipsis = () => ({
  components: { EllipsisIcon },
  template: '<EllipsisIcon style="width:32px;height:32px;" />',
});

export const Endpoint = () => ({
  components: { EndpointIcon },
  template: '<EndpointIcon style="width:32px;height:32px;" />',
});

export const Filter = () => ({
  components: { FilterIcon },
  template: '<FilterIcon style="width:32px;height:32px;" />',
});

export const Forum = () => ({
  components: { ForumIcon },
  template: '<ForumIcon style="width:32px;height:32px;" />',
});

export const GenericFile = () => ({
  components: { GenericFileIcon },
  template: '<GenericFileIcon style="width:32px;height:32px;" />',
});

export const InlineChevronDownCircle = () => ({
  components: { InlineChevronDownCircleIcon },
  template: '<InlineChevronDownCircleIcon style="width:32px;height:32px;" />',
});

export const InlineChevronDown = () => ({
  components: { InlineChevronDownIcon },
  template: '<InlineChevronDownIcon style="width:32px;height:32px;" />',
});

export const InlineChevronRight = () => ({
  components: { InlineChevronRightIcon },
  template: '<InlineChevronRightIcon style="width:32px;height:32px;" />',
});

export const InlineClose = () => ({
  components: { InlineCloseIcon },
  template: '<InlineCloseIcon style="width:32px;height:32px;" />',
});

export const InlineDownload = () => ({
  components: { InlineDownloadIcon },
  template: '<InlineDownloadIcon style="width:32px;height:32px;" />',
});

export const InlineMinusCircleSolid = () => ({
  components: { InlineMinusCircleSolidIcon },
  template: '<InlineMinusCircleSolidIcon style="width:32px;height:32px;" />',
});

export const InlinePlusCircle = () => ({
  components: { InlinePlusCircleIcon },
  template: '<InlinePlusCircleIcon style="width:32px;height:32px;" />',
});

export const InlinePlusCircleSolid = () => ({
  components: { InlinePlusCircleSolidIcon },
  template: '<InlinePlusCircleSolidIcon style="width:32px;height:32px;" />',
});

export const InlineReplay = () => ({
  components: { InlineReplayIcon },
  template: '<InlineReplayIcon style="width:32px;height:32px;" />',
});

export const Link = () => ({
  components: { LinkIcon },
  template: '<LinkIcon style="width:32px;height:32px;" />',
});

export const Magnifier = () => ({
  components: { MagnifierIcon },
  template: '<MagnifierIcon style="width:32px;height:32px;" />',
});

export const Path = () => ({
  components: { PathIcon },
  template: '<PathIcon style="width:32px;height:32px;" />',
});

export const Pause = () => ({
  components: { PauseIcon },
  template: '<PauseIcon style="width:32px;height:32px;" />',
});

export const Play = () => ({
  components: { PlayIcon },
  template: '<PlayIcon style="width:32px;height:32px;" />',
});

export const ResetCircle = () => ({
  components: { ResetCircleIcon },
  template: '<ResetCircleIcon style="width:32px;height:32px;" />',
});

export const Search = () => ({
  components: { SearchIcon },
  template: '<SearchIcon style="width:32px;height:32px;" />',
});

export const Sidenav = () => ({
  components: { SidenavIcon },
  template: '<SidenavIcon style="width:32px;height:32px;" />',
});

// SingleLetterSymbolIcon requires a `symbol` prop (single character label).
export const SingleLetterSymbol = () => ({
  components: { SingleLetterSymbolIcon },
  template: '<SingleLetterSymbolIcon symbol="S" style="width:32px;height:32px;" />',
});

export const SwiftFile = () => ({
  components: { SwiftFileIcon },
  template: '<SwiftFileIcon style="width:32px;height:32px;" />',
});

export const Technology = () => ({
  components: { TechnologyIcon },
  template: '<TechnologyIcon style="width:32px;height:32px;" />',
});

export const Timer = () => ({
  components: { TimerIcon },
  template: '<TimerIcon style="width:32px;height:32px;" />',
});

export const TopicFunc = () => ({
  components: { TopicFuncIcon },
  template: '<TopicFuncIcon style="width:32px;height:32px;" />',
});

export const TopicFuncOp = () => ({
  components: { TopicFuncOpIcon },
  template: '<TopicFuncOpIcon style="width:32px;height:32px;" />',
});

export const TopicSubscript = () => ({
  components: { TopicSubscriptIcon },
  template: '<TopicSubscriptIcon style="width:32px;height:32px;" />',
});

export const Tutorial = () => ({
  components: { TutorialIcon },
  template: '<TutorialIcon style="width:32px;height:32px;" />',
});

// TwoLetterSymbolIcon requires `first` and `second` props (single character labels).
export const TwoLetterSymbol = () => ({
  components: { TwoLetterSymbolIcon },
  template: '<TwoLetterSymbolIcon first="T" second="L" style="width:32px;height:32px;" />',
});

export const Xcode = () => ({
  components: { XcodeIcon },
  template: '<XcodeIcon style="width:32px;height:32px;" />',
});
