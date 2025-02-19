/**
 * Types for Fuel JSON ABI Format as defined on:
 * https://github.com/FuelLabs/fuel-specs/blob/master/src/abi/json-abi-format.md
 */
export interface JsonAbi {
  readonly types: readonly JsonAbiType[];
  readonly loggedTypes: readonly JsonAbiLoggedType[];
  readonly functions: readonly JsonAbiFunction[];
  readonly configurables: readonly JsonAbiConfigurable[];
  readonly encoding?: string;
}

export interface JsonAbiType {
  readonly typeId: number;
  readonly type: string;
  readonly components: readonly JsonAbiArgument[] | null;
  readonly typeParameters: readonly number[] | null;
}
export interface JsonAbiArgument {
  readonly type: number;
  readonly name: string;
  readonly typeArguments: readonly JsonAbiArgument[] | null;
}

export interface JsonAbiLoggedType {
  readonly logId: string;
  readonly loggedType: JsonAbiArgument;
}

export interface JsonAbiFunction {
  readonly name: string;
  readonly inputs: readonly JsonAbiArgument[];
  readonly output: JsonAbiArgument;
  readonly attributes: readonly JsonAbiFunctionAttribute[] | null;
}

export interface JsonAbiFunctionAttribute {
  readonly name: string;
  readonly arguments: ReadonlyArray<string>;
}

export interface JsonAbiConfigurable {
  name: string;
  configurableType: JsonAbiArgument;
  offset: number;
}
