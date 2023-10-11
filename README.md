# テーブル設計

## users テーブル

| Column             | Type   | Option                    |
| ------------------ | ------ | ------------------------- |
| nickname           | string | null: false               |
| encrypted_password | string | null: false               |
| email              | string | null: false, unique: true |

### Association

- has_many :rooms


## rooms テーブル

| Column    | Type       | Option                         |
| --------- | ---------- | ------------------------------ |
| room_name | string     | null: false                    |
| user      | references | null: false, foreign_key: true |

### Association

- belongs_to :user
- has_many :members


## members テーブル

| Column   | Type       | Option                         |
| -------- | ---------- | ------------------------------ |
| name     | string     | null: false                    |
| fraction | integer    |                                |
| room     | references | null: false, foreign_key: true |

### Association

- belongs_to :room