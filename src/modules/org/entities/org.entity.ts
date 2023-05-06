import { BaseEntity } from '@app/common';
import { StoryEntity } from 'src/modules/story/entities/story.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'org' })
export class OrgEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  phone: string;

  @Column({ type: 'varchar', length: 255 })
  address: string;

  @Column({ type: 'varchar', length: 255 })
  city: string;

  @Column({ type: 'varchar', length: 255 })
  state: string;

  @Column({ type: 'varchar', length: 255 })
  zip: string;

  @Column({ type: 'varchar', length: 255 })
  country: string;

  @Column({ type: 'varchar', length: 255 })
  website: string;

  @Column({ type: 'varchar', length: 255 })
  avatar: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @Column({ type: 'varchar', length: 50 })
  status: string;

  // Relation

  @OneToMany(() => StoryEntity, (story) => story.org, {
    onDelete: 'CASCADE',
  })
  stories: StoryEntity[];
}
