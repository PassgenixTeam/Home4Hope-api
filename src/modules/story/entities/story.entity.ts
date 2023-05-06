import { BaseEntity } from '@app/common';
import { CurrencyEntity } from 'src/modules/currency/entities/currency.entity';
import { DonateEntity } from 'src/modules/donate/entities/donate.entity';
import { OrgEntity } from 'src/modules/org/entities/org.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity({ name: 'story' })
export class StoryEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar', length: 255 })
  thumbnail: string;

  @Column({ type: 'varchar', length: 255 })
  video: string;

  @Column({ type: 'varchar', length: 255 })
  status: string;

  @Column({ type: 'uuid', name: 'org_id' })
  orgId: string;

  @ManyToOne(() => OrgEntity, (org) => org.stories, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'org_id' })
  org: OrgEntity;

  @Column({ type: 'float', default: 0 })
  minDonate: number;

  @Column({ type: 'integer', default: 0 })
  amountDonate: number;

  @Column({ type: 'float', default: 0 })
  rateDonate: number;

  @Column({ type: 'float', default: 0 })
  totalDonate: number;

  @Column({ type: 'timestamp' })
  expiredAt: Date;

  @Column({ type: 'uuid', name: 'currency_id' })
  currencyId: string;

  @ManyToOne(() => CurrencyEntity, (currency) => currency.stories, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'currency_id' })
  currency: CurrencyEntity;

  @OneToMany(() => DonateEntity, (donate) => donate.story, {
    onDelete: 'CASCADE',
  })
  donates: DonateEntity[];
}
