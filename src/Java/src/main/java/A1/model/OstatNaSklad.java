package A1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import A1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ОстатНаСклад
 */
@Entity(name = "IISA1ОстатНаСклад")
@Table(schema = "public", name = "ОстатНаСклад")
public class OstatNaSklad {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Organizacii")
    @Convert("Organizacii")
    @Column(name = "Организации", length = 16, unique = true, nullable = false)
    private UUID _organizaciiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Organizacii", insertable = false, updatable = false)
    private Organizacii organizacii;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sklady")
    @Convert("Sklady")
    @Column(name = "Склады", length = 16, unique = true, nullable = false)
    private UUID _skladyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sklady", insertable = false, updatable = false)
    private Sklady sklady;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Nomenklatury")
    @Convert("Nomenklatury")
    @Column(name = "Номенклатуры", length = 16, unique = true, nullable = false)
    private UUID _nomenklaturyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Nomenklatury", insertable = false, updatable = false)
    private Nomenklatury nomenklatury;


    public OstatNaSklad() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }


}