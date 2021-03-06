/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateSynonymsInput = {
  id: string,
  base?: string | null,
  session: number,
  type: string,
  index: number,
  A?: string | null,
  B?: string | null,
  C?: string | null,
  D?: string | null,
  E?: string | null,
  Answer?: string | null,
  Hint?: string | null,
};

export type UpdateSynonymsInput = {
  id: string,
  base?: string | null,
  session: number,
  type?: string | null,
  index?: number | null,
  A?: string | null,
  B?: string | null,
  C?: string | null,
  D?: string | null,
  E?: string | null,
  Answer?: string | null,
  Hint?: string | null,
};

export type DeleteSynonymsInput = {
  id: string,
  session: number,
};

export type TableSynonymsFilterInput = {
  id?: TableIDFilterInput | null,
  base?: TableStringFilterInput | null,
  session?: TableIntFilterInput | null,
  type?: TableStringFilterInput | null,
  index?: TableIntFilterInput | null,
  A?: TableStringFilterInput | null,
  B?: TableStringFilterInput | null,
  C?: TableStringFilterInput | null,
  D?: TableStringFilterInput | null,
  E?: TableStringFilterInput | null,
  Answer?: TableStringFilterInput | null,
  Hint?: TableStringFilterInput | null,
};

export type TableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type CreateSynonymsMutationVariables = {
  input: CreateSynonymsInput,
};

export type CreateSynonymsMutation = {
  createSynonyms:  {
    __typename: "synonyms",
    id: string,
    base: string | null,
    session: number,
    type: string,
    index: number,
    A: string | null,
    B: string | null,
    C: string | null,
    D: string | null,
    E: string | null,
    Answer: string | null,
    Hint: string | null,
  } | null,
};

export type UpdateSynonymsMutationVariables = {
  input: UpdateSynonymsInput,
};

export type UpdateSynonymsMutation = {
  updateSynonyms:  {
    __typename: "synonyms",
    id: string,
    base: string | null,
    session: number,
    type: string,
    index: number,
    A: string | null,
    B: string | null,
    C: string | null,
    D: string | null,
    E: string | null,
    Answer: string | null,
    Hint: string | null,
  } | null,
};

export type DeleteSynonymsMutationVariables = {
  input: DeleteSynonymsInput,
};

export type DeleteSynonymsMutation = {
  deleteSynonyms:  {
    __typename: "synonyms",
    id: string,
    base: string | null,
    session: number,
    type: string,
    index: number,
    A: string | null,
    B: string | null,
    C: string | null,
    D: string | null,
    E: string | null,
    Answer: string | null,
    Hint: string | null,
  } | null,
};

export type GetSynonymsQueryVariables = {
  id: string,
  session: number,
};

export type GetSynonymsQuery = {
  getSynonyms:  {
    __typename: "synonyms",
    id: string,
    base: string | null,
    session: number,
    type: string,
    index: number,
    A: string | null,
    B: string | null,
    C: string | null,
    D: string | null,
    E: string | null,
    Answer: string | null,
    Hint: string | null,
  } | null,
};

export type ListSynonymsQueryVariables = {
  filter?: TableSynonymsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSynonymsQuery = {
  listSynonyms:  {
    __typename: "synonymsConnection",
    items:  Array< {
      __typename: "synonyms",
      id: string,
      base: string | null,
      session: number,
      type: string,
      index: number,
      A: string | null,
      B: string | null,
      C: string | null,
      D: string | null,
      E: string | null,
      Answer: string | null,
      Hint: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type QuerySynonymsBySessionBaseTypeQueryVariables = {
  session: number,
  first?: number | null,
  after?: string | null,
};

export type QuerySynonymsBySessionBaseTypeQuery = {
  querySynonymsBySessionBaseType:  {
    __typename: "synonymsConnection",
    items:  Array< {
      __typename: "synonyms",
      id: string,
      base: string | null,
      session: number,
      type: string,
      index: number,
      A: string | null,
      B: string | null,
      C: string | null,
      D: string | null,
      E: string | null,
      Answer: string | null,
      Hint: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type QuerySynonymsBySessionBaseIndexQueryVariables = {
  session: number,
  first?: number | null,
  after?: string | null,
};

export type QuerySynonymsBySessionBaseIndexQuery = {
  querySynonymsBySessionBaseIndex:  {
    __typename: "synonymsConnection",
    items:  Array< {
      __typename: "synonyms",
      id: string,
      base: string | null,
      session: number,
      type: string,
      index: number,
      A: string | null,
      B: string | null,
      C: string | null,
      D: string | null,
      E: string | null,
      Answer: string | null,
      Hint: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateSynonymsSubscriptionVariables = {
  id?: string | null,
  base?: string | null,
  session?: number | null,
  type?: string | null,
  index?: number | null,
};

export type OnCreateSynonymsSubscription = {
  onCreateSynonyms:  {
    __typename: "synonyms",
    id: string,
    base: string | null,
    session: number,
    type: string,
    index: number,
    A: string | null,
    B: string | null,
    C: string | null,
    D: string | null,
    E: string | null,
    Answer: string | null,
    Hint: string | null,
  } | null,
};

export type OnUpdateSynonymsSubscriptionVariables = {
  id?: string | null,
  base?: string | null,
  session?: number | null,
  type?: string | null,
  index?: number | null,
};

export type OnUpdateSynonymsSubscription = {
  onUpdateSynonyms:  {
    __typename: "synonyms",
    id: string,
    base: string | null,
    session: number,
    type: string,
    index: number,
    A: string | null,
    B: string | null,
    C: string | null,
    D: string | null,
    E: string | null,
    Answer: string | null,
    Hint: string | null,
  } | null,
};

export type OnDeleteSynonymsSubscriptionVariables = {
  id?: string | null,
  base?: string | null,
  session?: number | null,
  type?: string | null,
  index?: number | null,
};

export type OnDeleteSynonymsSubscription = {
  onDeleteSynonyms:  {
    __typename: "synonyms",
    id: string,
    base: string | null,
    session: number,
    type: string,
    index: number,
    A: string | null,
    B: string | null,
    C: string | null,
    D: string | null,
    E: string | null,
    Answer: string | null,
    Hint: string | null,
  } | null,
};
