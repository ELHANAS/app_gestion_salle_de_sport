use `react-laravelv2` ;
DELIMITER $$
drop procedure  if exists  changeEtatMembre ;
CREATE PROCEDURE  changeEtatMembre(in idV int)
begin
    if(idV in (select idMembre from  abonnements where idMembre = idV and etat = 1 or etat = 2)) then
update  membres
set etat = 1
where id = idV ;
end if ;
end $$






delimiter $$

drop  procedure  if exists  changeEtatAbonnement ;
create  procedure  changeEtatAbonnement(in  id int)
begin
    declare dateP date ;
    declare  Duree INTEGER ;
    declare  mnRest INTEGER ;


    if(id in (select  idAbonnement from paiements )) then
        set mnRest = ( select  montantRestant from paiements  where idAbonnement = id ORDER BY datePaiement desc ,montantRestant  LIMIT 1) ;
        SET dateP = ( select  datePaiement from paiements  where idAbonnement = id ORDER BY datePaiement desc ,montantRestant  LIMIT 1) ;
        SET  Duree = (select abonnements.duree  from abonnements   where codeA = id  );
        if(to_days(now()) <= (to_days(dateP) +(duree *30))) then
update  abonnements
set etat = 1
where codeA = id ;
if(mnRest = 0) then
update  abonnements
set etat = 2
where codeA = id ;
end if ;
end if ;
        if(to_days(now()) > (to_days(dateP) +(duree *30))) then
update  abonnements
set etat = 0
where codeA = id ;
end if ;
end if ;
end $$









DELIMITER  $$

drop  procedure  if exists  getPaiementParYear ;
create  procedure  getPaiementParYear(in year int)
begin
select  month(paiements.datePaiement) month ,sum(montantPaye) sum
from  paiements
where  year(paiements.datePaiement) =year
group by month(paiements.datePaiement) ;
end $$


DELIMITER  $$

drop  procedure  if exists  getMembreParMois ;
create  procedure  getMembreParMois(in month int)
begin
select  day(membres.created_at) day ,count(*)  sum
from  membres
where  month(membres.created_at) =month
group by day(membres.created_at)
;

end $$


DELIMITER  $$

drop  procedure  if exists  getPaiementParMonth ;
create  procedure  getPaiementParMonth(in month int)
begin
select  day(paiements.datePaiement) day ,sum(montantPaye) sum
from  paiements
where  month(paiements.datePaiement) =month
group by day(paiements.datePaiement) ;
end $$

