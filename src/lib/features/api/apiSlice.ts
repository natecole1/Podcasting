
import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { gql } from 'graphql-request';

import { PodcastSearchResultType, TopPodcastsByGenresType, TopPodcastsDetailType } from '@/src/types';

import { useSelector } from 'react-redux';
import { RootState } from "@/src/lib/store";



export const apiSlice = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: `${process.env.NEXT_PUBLIC_TADDY_API_URL}`,
    prepareHeaders: (headers) => {
      headers.set("X-USER-ID", `${process.env.NEXT_PUBLIC_TADDY_USER_ID}`);
      headers.set("X-API-KEY", `${process.env.NEXT_PUBLIC_TADDY_API_KEY}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopTenPodcastsDetails: builder.query<TopPodcastsDetailType, void>({
      query: () => ({
        document: gql`
          {
            getMultiplePodcastSeries(
              uuids: [
                "cb8d858a-3ef4-4645-8942-67e55c0927f2"
                "adb07ddc-d083-427f-a5a2-7bd8e197ac01"
                "23bc333e-295a-48d9-b873-0e3d5e882f95"
                "fc3c8bb1-1b2a-4619-a029-8866610ae292"
                "99157d6b-a144-445a-a731-b6c84c417486"
                "b35214a1-ff08-45a9-bc1e-c5fb38be009e"
                "c5000a5a-ad47-4956-a17a-c88ab181346c"
                "4e5eee8b-284d-4cfd-8b0d-1ffa188d9c8e"
                "dd06fb11-3fde-4151-b162-dbd2ae118dbe"
                "075bef27-dcf2-470f-861d-2f1213d06fee"
              ]
            ) {
              uuid
              name
              itunesId
              description(shouldStripHtmlTags: true)
              imageUrl
              itunesInfo {
                uuid
                publisherName
                baseArtworkUrlOf(size: 640)
              }
              episodes {
                uuid
                name
                description(shouldStripHtmlTags: true)
                audioUrl
              }
            }
          }
        `,
      }),
    }),

    getNoteworthyPodcastsDetails: builder.query<TopPodcastsDetailType, void>({
      query: () => ({
        document: gql`
          {
            getMultiplePodcastSeries(
              uuids: [
                "4e883d98-43d1-4ac7-8de8-4afc13244393"
                "b4b19a01-fd23-46c7-a8dd-3ce31ed127c2"
                "b5ebbe3d-d2e0-43d1-ac41-cb2cb2f67a99"
                "72ca3fdd-eabd-466e-b405-b50a8defd05f"
                "874f4009-a9cc-4db2-b6d5-6c9e051e2738"
                "e762bc99-d353-4c98-8247-25d72b743f56"
              ]
            ) {
              uuid
              name
              itunesId
              description(shouldStripHtmlTags: true)
              imageUrl
              itunesInfo {
                uuid
                publisherName
                baseArtworkUrlOf(size: 640)
              }
              episodes {
                uuid
                name
                description(shouldStripHtmlTags: true)
                audioUrl
              }
            }
          }
        `,
      }),
    }),
    getTopTechPodcastsDetails: builder.query<TopPodcastsDetailType, void>({
      query: () => ({
        document: gql`
          {
            getMultiplePodcastSeries(
              uuids: [
                "f2c3d9e3-c1fd-4d46-9c49-20002099cc5c"
                "8e73b92e-f368-4a63-981f-ed4de7d39aa4"
                "4aa0f263-0d63-40c8-a519-c988474c0a57"
                "1091ccb0-f7a6-43b1-9247-0b1f10c4c808"
                "2173ff53-f9d4-41a4-acfa-74dd64bba22a"
                "5d938cc2-824a-4c71-be5c-04bf85b7a6b7"
                "ae08f357-bb9b-4d90-a22b-8c16bb29c527"
                "e74943ac-9134-4b76-b491-578858078ebb"
                "c645ccad-e2cc-4a68-a403-0503fd60869c"
                "4bb5a32e-3c92-4669-b8f1-6360ada2cc94"
              ]
            ) {
              uuid
              name
              itunesId
              description(shouldStripHtmlTags: true)
              imageUrl
              itunesInfo {
                uuid
                publisherName
                baseArtworkUrlOf(size: 640)
              }
              episodes {
                uuid
                name
                description(shouldStripHtmlTags: true)
                audioUrl
              }
            }
          }
        `,
      }),
    }),
    getTopPodcastsByGenres: builder.query<TopPodcastsByGenresType, string>({
      query: (genre) => ({
        document: gql`
          {
            getTopChartsByGenres(
              taddyType: PODCASTSERIES
              genres: PODCASTSERIES_${genre}
              limitPerPage: 20
            ) {
              topChartsId
              podcastSeries {
                uuid
                name
                imageUrl
                description(shouldStripHtmlTags: true)
                episodes {
                  uuid
                  name
                  description(shouldStripHtmlTags: true)
                  audioUrl
                }
              }
            }
          }
        `,
      }),
    }),
    getPodcastSearchResults: builder.query<PodcastSearchResultType, string>({
      query: (searchTerm) => ({
        document: gql`
          {
            search(
              term: "${searchTerm}"
              filterForTypes: [PODCASTSERIES, PODCASTEPISODE]
              sortBy: POPULARITY
            ) {
              searchId
              podcastSeries {
                uuid
                name
                imageUrl
                description(shouldStripHtmlTags: true)
                episodes {
                  uuid
                  name
                  description(shouldStripHtmlTags: true)
                  audioUrl
                }
              }
              podcastEpisodes {
                uuid
                name
                description(shouldStripHtmlTags: true)
                audioUrl
              }
            }
          }
        `,
      }),
    }),
  }),
});

export const { useGetNoteworthyPodcastsDetailsQuery,useGetPodcastSearchResultsQuery, useGetTopPodcastsByGenresQuery, useGetTopTechPodcastsDetailsQuery, useGetTopTenPodcastsDetailsQuery } = apiSlice;


