import { Id } from "@/convex/_generated/dataModel";
import { Dispatch, SetStateAction, ReactNode, MutableRefObject } from "react";
import { number } from "zod";


export interface GenerateThumbnailProps {
  image: string;
  setImage: Dispatch<SetStateAction<string>>;
  imagePrompt: string;
  setImagePrompt: Dispatch<SetStateAction<string>>;
  setImageStorageId: Dispatch<SetStateAction<Id<"_storage"> | null>>;
}

export type PodcastQueryType = {
  topChartsId: number;
  podcastSeries: {
    uuid: number,
    name: string
  };
  podcastEpisodes: {
    uuid: number,
    name: string
    podcastSeries: {
      uuid: number
      name: string
    }
  },
}

export type TaddyArgType = {

taddyType:  {
  PODCASTSERIES: string,
  PODCASTEPISODE: string,
  COMICSERIES: string,
  COMICISSUE: string,
  CREATOR: string
}

country: {
  AFGHANISTAN: string;
  ALAND_ISLANDS: string;
  ALBANIA: string;
  ALGERIA: string;
  AMERICAN_SAMOA: string;
  ANDORRA: string;
  ANGOLA: string;
  ANGUILLA: string;
  ANTARCTICA: string;
  ANTIGUA_AND_BARBUDA: string;
  ARGENTINA: string;
  ARMENIA: string;
  ARUBA: string;
  AUSTRALIA: string;
  AUSTRIA: string;
  AZERBAIJAN: string;
  BAHAMAS: string;
  BAHRAIN: string;
  BANGLADESH: string;
  BARBADOS: string;
  BELARUS: string;
  BELGIUM: string;
  BELIZE: string;
  BENIN: string;
  BERMUDA: string;
  BHUTAN: string;
  BOLIVIA_PLURINATIONAL_STATE_OF: string;
  BONAIRE_SINT_EUSTATIUS_AND_SABA: string;
  BOSNIA_AND_HERZEGOVINA: string;
  BOTSWANA: string;
  BOUVET_ISLAND: string;
  BRAZIL: string;
  BRITISH_INDIAN_OCEAN_TERRITORY_THE: string;
  BRUNEI_DARUSSALAM: string;
  BULGARIA: string;
  BURKINA_FASO: string;
  BURUNDI: string;
  CABO_VERDE: string;
  CAMBODIA: string,
  CAMEROON: string,
  CANADA: string,
  CAYMAN_ISLANDS: string
  CENTRAL_AFRICAN_REPUBLIC: string
  CHAD: string,
  CHILE: string,
  CHINA: string,
  CHRISTMAS_ISLAND: string
  COCOS_KEELING_ISLANDS: string,
  COLOMBIA: string,
  COMOROS: string,
  CONGO: string,
  CONGO_THE_DEMOCRATIC_REPUBLIC_OF: string,
  COOK_ISLANDS: string,
  COSTA_RICA: string,
  COTE_D_IVOIRE: string,
  CROATIA: string,
  CUBA: string,
  CURACAO: string,
  CYPRUS: string,
  CZECHIA: string,
  DENMARK: string,
  DJIBOUTI: string,
  DOMINICA: string,
  DOMINICAN_REPUBLIC: string,
  ECUADOR: string,
  EGYPT: string,
  EL_SALVADOR: string,
  EQUATORIAL_GUINEA: string,
  ERITREA: string,
  ESTONIA: string,
  ESWATINI: string,
  ETHIOPIA: string,
  FALKLAND_ISLANDS_THE_MALVINAS: string,
  FAROE_ISLANDS: string,
  FIJI: string,
  FINLAND: string,
  FRANCE: string,
  FRENCH_GUIANA: string,
  FRENCH_POLYNESIA: string,
  FRENCH_SOUTHERN_TERRITORIES: string,
  GABON: string,
  GAMBIA: string,
  GEORGIA: string,
  GERMANY: string,
  GHANA: string,
  GIBRALTAR: string,
  GREECE: string,
  GREENLAND: string,
  GRENADA: string,
  GUADELOUPE: string,
  GUAM: string,
  GUATEMALA: string,
  GUERNSEY: string,
  GUINEA: string,
  GUINEA_BISSAU: string,
  GUYANA: string,
  HAITI: string,
  HEARD_ISLAND_AND_MCDONALD_ISLAND: string,
  HOLY_SEE: string,
  HONDURAS: string,
  HONG_KONG: string,
  HUNGARY: string,
  ICELAND: string,
  INDIA: string,
  INDONESIA: string,
  IRAN: string,
  IRAQ: string,
  IRELAND: string,
  ISLE_OF_MAN: string,
  ISRAEL: string,
  ITALY: string,
  JAMAICA: string,
  JAPAN: string,
  JERSEY: string,
  JORDAN: string,
  KAZAKHSTAN: string,
  KENYA: string,
  KIRIBATI: string,
  KOREA_NORTH: string,
  KOREA_SOUTH: string,
  KUWAIT: string,
  KYRGYZSTAN: string,
  LAO_PEOPLES_DEMOCRATIC_REPUBLIC_THE: string,
  LATVIA: string,
  LEBANON: string,
  LESOTHO: string,
  LIBERIA: string,
  LIBYA: string,
  LIECHTENSTEIN: string,
  LITHUANIA: string,
  LUXEMBOURG: string,
  MACAO: string,
  MADAGASCAR: string,
  MALAWI: string,
  MALAYSIA: string,
  MALDIVES: string,
  MALI: string,
  MALTA: string,
  MARSHALL_ISLANDS: string,
  MARTINIQUE: string,
  MAURITANIA: string,
  MAURITIUS: string,
  MAYOTTE: string,
  MEXICO: string,
  MICRONESIA_FEDERATED_STATES: string,
  MINOR_OUTLYING_ISLANDS_US: string,
  MOLDOVA_THE_REPUBLIC: string,
  MONACO: string,
  MONGOLIA: string,
  MONTENEGRO: string,
  MONTSERRAT: string,
  MOROCCO: string,
  MOZAMBIQUE: string,
  MYANMAR: string,
  NAMIBIA: string,
  NAURU: string,
  NEPAL: string,
  NETHERLANDS: string,
  NEW_CALEDONIA: string,
  NEW_ZEALAND: string,
  NICARAGUA: string,
  NIGER: string,
  NIGERIA: string,
  NIUE: string,
  NORFOLK_ISLAND: string,
  NORTH_MACEDONIA: string,
  NORTHERN_MARIANA_ISLANDS: string,
  NORWAY: string,
  OMAN: string,
  PAKISTAN: string,
  PALAU: string,
  PALESTINE_STATE: string,
  PANAMA: string,
  PAPUA_NEW_GUINEA: string,
  PARAGUAY: string,
  PERU: string,
  PHILIPPINES: string,
  PITCAIRN: string,
  POLAND: string,
  PORTUGAL: string,
  PUERTO_RICO: string,
  QATAR: string,
  REUNION: string,
  ROMANIA: string,
  RUSSIA: string,
  RWANDA: string,
  SAINT_BARTHELEMY: string,
  SAINT_HELENA_ASCENSION_AND_TRISTAN_DA_CUNHA: string,
  SAINT_KITTS_AND_NEVIS: string,
  SAINT_LUCIA: string,
  SAINT_MARTIN_FRENCH_PART: string,
  SAINT_PIERRE_AND_MIQUELON: string,
  SAINT_VINCENT_AND_THE_GRENADINES: string,
  SAMOA: string,
  SAN_MARINO: string,
  SAO_TOME_AND_PRINCIPE: string,
  SAUDI_ARABIA: string,
  SENEGAL: string,
  SERBIA: string,
  SEYCHELLES: string,
  SIERRA_LEONE: string,
  SINGAPORE: string,
  SINT_MAARTEN_DUTCH_PART: string,
  SLOVAKIA: string,
  SLOVENIA: string,
  SOLOMON_ISLANDS: string,
  SOMALIA: string,
  SOUTH_AFRICA: string,
  SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS: string,
  SOUTH_SUDAN: string,
  SPAIN: string,
  SRI_LANKA: string,
  SUDAN: string,
  SURINAME: string,
  SVALBARD_AND_JAN_MAYEN: string,
  SWEDEN: string,
  SWITZERLAND: string,
  SYRIA: string,
  TAIWAN: string,
  TAJIKISTAN: string,
  TANZANIA: string,
  THAILAND: string,
  TIMOR_LESTE: string,
  TOGO: string,
  TOKELAU: string,
  TONGA: string,
  TRINIDAD_AND_TOBAGO: string,
  TUNISIA: string,
  TURKEY: string,
  TURKMENISTAN: string,
  TURKS_AND_CAICOS_ISLANDS: string,
  TUVALU: string,
  UGANDA: string,
  UKRAINE: string,
  UNITED_ARAB_EMIRATES: string,
  UNITED_KINGDOM: string,
  UNITED_STATES_OF_AMERICA: string,
  URUGUAY: string,
  UZBEKISTAN: string,
  VANUATU: string,
  VENEZUELA: string,
  VIETNAM: string,
  VIRGIN_ISLANDS_BRITISH: string,
  VIRGIN_ISLANDS_US: string,
  WALLIS_AND_FUTUNA: string,
  WESTERN_SAHARA: string,
  YEMEN: string,
  ZAMBIA: string,
  ZIMBABWE: string
}
}

export type TopPodcastsDetailType = {
  getMultiplePodcastSeries: [
    {
      uuid: string;
      name: string;
      itunesId: number;
      description: string;
      imageUrl: string;
      itunesInfo: {
        uuid: string;
        publisherName: string;
        baseArtworkUrlOf: string;
      };
      episodes: [
        {
          uuid: string;
          name: string;
          description: string;
          audioUrl: string;
        },
      ];
    },
  ];
};

export type PodcastSeriesDetailType = {
    getPodcastSeries: {
      uuid: string,
      name: string,
      itunesId: number,
      description(
        shouldStripHtmlTags: boolean
      ): string,
      imageUrl: string,
      itunesInfo: {
        uuid: string;
        publisherName: string;
        baseArtworkUrlOf: string
      },
      episodes: [
        {
          uuid: string,
          name: string,
          description(
            shouldStripHtmlTags: boolean
          ): string,
          audioUrl: string
        }
      ]
      
    }
}

export type PodcastPlayEpisodesProps = {
  name: string;
  imageUrl: string;
  episodes: [
    {
      uuid: string;
      name: string;
      description: string;
      audioUrl: string;
    },
  ];
};

export type PodcastType = {
  host?: string;
  title?: string;
  imgURL?: string;
  podcastId?: string;
};

export type AudioPlayerProps = {
  audioUrl: string | undefined;
  handlePrevClick: () => void;
  handleNextClick: () => void;
};

export type CloseButtonProp = {
  onClick: () => void
}

export type EpisodeDetailsProps = {
  name: string;
  description: string;
};

export type PlayPauseButtonProps = {
  onClick: () => void;
  podcastEpisodeId: number;
  id: number;
  isPlaying: boolean;
}

export type HeaderPlayPauseButtonProps = {
  onClick: () => void;
  isPlaying: boolean;
}

export type PodcastPlayHeaderProps = {
  name: string;
  description: string;
  imageUrl: string;
  bgImage: string;
};

export type ModalProps = {
  textToClick: string;
  title: string
  children: ReactNode;
}

export type TopPodcastsByGenresType = {
  getTopChartsByGenres: {
    topChartsId: string;
    podcastSeries: [{
      uuid: string;
      name: string;
      imageUrl: string;
      description: string;
      episodes: [
        {
          uuid: string;
          name: string;
          description: string;
          audioUrl: string
        }
    ]
    }]
   
  }
}

export type BrowseCategoryCardProps = {

  displayGenre: string
  color: string;
  onClick: () => void;
}

export interface PodcastGenreType {
  value: string;
}

export type PodcastEpisodeType = {
  podcastLibrary: {
    id:string; 
    title:string; 
    podcastName: string; 
    imageUrl: string;
    audioUrl: string;
  }[]
}

export type SavedLibraryPodcastProps = {
  imageUrl: string;
  podcastName: string;
  podcastEpisodeTitle: string;
  onPlayClick: () => void;
  onDeleteClick: () => void;
  isPlaying: boolean;
  podcastEpisodeId: number;
  id: number;
}

export interface Controls {
    audioRef: MutableRefObject<HTMLAudioElement | null>;
    isRecordingInProgress: boolean;
    isPausedRecording: boolean;
    audioData: Uint8Array;
    recordingTime: number;
    mediaRecorder: MediaRecorder | null;
    duration: number;
    currentAudioTime: number;
    audioSrc: string;
    isPausedRecordedAudio: boolean;
    isProcessingRecordedAudio: boolean;
    isCleared: boolean;
    isAvailableRecordedAudio: boolean;
    recordedBlob: Blob | null;
    bufferFromRecordedBlob: AudioBuffer | null;
    formattedDuration: string;
    formattedRecordingTime: string;
    formattedRecordedAudioCurrentTime: string;
    startRecording: () => void;
    togglePauseResume: () => void;
    startAudioPlayback: () => void;
    stopAudioPlayback: () => void;
    stopRecording: () => void;
    saveAudioFile: () => void;
    clearCanvas: () => void;
    setCurrentAudioTime: Dispatch<SetStateAction<number>>;
    error: Error | null;
    isProcessingOnResize: boolean;
    isProcessingStartRecording: boolean;
    isPreloadedBlob: boolean;
    setPreloadedAudioBlob: (blob: Blob) => void;
    _setIsProcessingAudioOnComplete: Dispatch<SetStateAction<boolean>>;
    _setIsProcessingOnResize: Dispatch<SetStateAction<boolean>>;
}

export type RecordPodcastProps = {
  recorderControls: Controls,
  isRecordingInProgress: boolean,
  formattedRecordingTime: string,
  isAvailableRecordedAudio: boolean,
  isSubmitting: boolean,
}

export type UserPodcastPlayHeaderProps = {
  name: string;
  description: string;
  imageUrl: string | undefined;
  bgImage: string;
};

export type UserPodcastPlayEpisodesProps = {
  name: string;
  imageUrl: string | undefined;
  episodes: 
     {
        _id: Id<"episodes">;
        _creationTime: number;
        audioStorageId?: Id<"_storage"> | undefined;
        user: Id<"users">;
        author: string;
        authorId: string;
        authorImageUrl: string;
        podcastEpisodeTitle: string;
        podcastEpisodeDescription: string;
        audioUrl: string;
      }[] | undefined,
  
};

export type PodcastSearchResultType = {
  search: {
    searchId: string;
    podcastSeries: [
      {
        uuid: string;
        name: string;
        imageUrl: string;
        description: string;
        episodes: [
          {
            uuid: string;
            name: string;
            description: string;
            audioUrl: string;
          },
        ];
      },
    ];
  };
};
