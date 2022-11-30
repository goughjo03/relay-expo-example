/**
 * @generated SignedSource<<d7a392727b2e61f4c40e24c8bc3a2e80>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FragmentComponentQuery$variables = {};
export type FragmentComponentQuery$data = {
  readonly myData: {
    readonly " $fragmentSpreads": FragmentRefs<"FragmentComponent_country">;
  } | null;
};
export type FragmentComponentQuery = {
  response: FragmentComponentQuery$data;
  variables: FragmentComponentQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "code",
    "value": "test-id"
  }
],
v1 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "FragmentComponentQuery",
    "selections": [
      {
        "alias": "myData",
        "args": (v0/*: any*/),
        "concreteType": "Country",
        "kind": "LinkedField",
        "name": "country",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FragmentComponent_country"
          }
        ],
        "storageKey": "country(code:\"test-id\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "FragmentComponentQuery",
    "selections": [
      {
        "alias": "myData",
        "args": (v0/*: any*/),
        "concreteType": "Country",
        "kind": "LinkedField",
        "name": "country",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "phone",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "capital",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Continent",
            "kind": "LinkedField",
            "name": "continent",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "country(code:\"test-id\")"
      }
    ]
  },
  "params": {
    "cacheID": "27c60f337a16944c86568d8bf9ca9b68",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "myData": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Country"
        },
        "myData.capital": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "String"
        },
        "myData.continent": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Continent"
        },
        "myData.continent.name": (v1/*: any*/),
        "myData.phone": (v1/*: any*/)
      }
    },
    "name": "FragmentComponentQuery",
    "operationKind": "query",
    "text": "query FragmentComponentQuery {\n  myData: country(code: \"test-id\") {\n    ...FragmentComponent_country\n  }\n}\n\nfragment FragmentComponent_country on Country {\n  phone\n  capital\n  continent {\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "dce66be991711c44a30196ef3dbc774d";

export default node;
