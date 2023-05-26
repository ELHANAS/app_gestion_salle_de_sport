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
