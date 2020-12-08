import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Users {
  readonly id: string;
  readonly email?: string;
  readonly password?: string;
  readonly first_name?: string;
  readonly last_name?: string;
  readonly user_status?: number;
  readonly is_deleted?: boolean;
  readonly created_at?: string;
  readonly created_by?: number;
  readonly updated_at?: string;
  readonly updated_by?: number;
  readonly Modules?: (Modules | null)[];
  readonly Contents?: (Contents | null)[];
  constructor(init: ModelInit<Users>);
  static copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}

export declare class Modules {
  readonly id: string;
  readonly module_name?: string;
  readonly module_summary?: string;
  readonly module_cover?: string;
  readonly module_icon?: string;
  readonly module_image?: string;
  readonly module_status?: number;
  readonly is_deleted?: boolean;
  readonly created_at?: string;
  readonly created_by?: number;
  readonly updated_at?: string;
  readonly updated_by?: string;
  readonly usersID: string;
  constructor(init: ModelInit<Modules>);
  static copyOf(source: Modules, mutator: (draft: MutableModel<Modules>) => MutableModel<Modules> | void): Modules;
}

export declare class Contents {
  readonly id: string;
  readonly parent_id?: number;
  readonly module_id?: number;
  readonly content_summary?: string;
  readonly content_details?: string;
  readonly content_title: string;
  readonly content_image?: string;
  readonly cover_image?: string;
  readonly content_status?: number;
  readonly is_deleted?: boolean;
  readonly created_at?: string;
  readonly created_by?: number;
  readonly updated_at?: string;
  readonly updated_by?: number;
  readonly usersID: string;
  constructor(init: ModelInit<Contents>);
  static copyOf(source: Contents, mutator: (draft: MutableModel<Contents>) => MutableModel<Contents> | void): Contents;
}