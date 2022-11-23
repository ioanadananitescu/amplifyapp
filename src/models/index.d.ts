import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerWorks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Works, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly inventar?: number | null;
  readonly name?: string | null;
  readonly artist?: string | null;
  readonly category?: string | null;
  readonly tags?: (string | null)[] | null;
  readonly subject?: (string | null)[] | null;
  readonly description?: string | null;
  readonly categorie?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWorks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Works, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly inventar?: number | null;
  readonly name?: string | null;
  readonly artist?: string | null;
  readonly category?: string | null;
  readonly tags?: (string | null)[] | null;
  readonly subject?: (string | null)[] | null;
  readonly description?: string | null;
  readonly categorie?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Works = LazyLoading extends LazyLoadingDisabled ? EagerWorks : LazyWorks

export declare const Works: (new (init: ModelInit<Works>) => Works) & {
  copyOf(source: Works, mutator: (draft: MutableModel<Works>) => MutableModel<Works> | void): Works;
}